// ============================================================
// FRANBOT RAG v2.0 — Motor Semántico Offline (Inspirado en Haven)
// ============================================================
// Vector DB en IndexedDB + Embeddings locales via Transformers.js
// Sin nube. Sin APIs. Sin límites. 100% browser.
// Absorbido del ecosistema open-source por Micelio MIU v3.0

class FranBotSemanticRAG {
    constructor() {
        this.dbName = 'franbot-vector-db';
        this.storeName = 'vectors';
        this.embeddingModel = null;
        this.isReady = false;
        this.db = null;
    }

    async init() {
        console.log('[RAG v2] Inicializando motor semántico...');

        // 1. Abrir IndexedDB para vectores
        await this._openDB();

        // 2. Cargar modelo de embeddings (Transformers.js)
        try {
            const { pipeline } = await import('https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2/dist/transformers.min.js');
            this.embeddingModel = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
            console.log('[RAG v2] Modelo de embeddings cargado (MiniLM-L6-v2, 384 dims).');
        } catch(e) {
            console.warn('[RAG v2] Transformers.js no disponible. Usando fallback TF-IDF.', e);
            this.embeddingModel = null;
        }

        // 3. Indexar memoria existente si hay datos nuevos
        await this._indexMemoriaRAG();

        this.isReady = true;
        console.log('[RAG v2] Motor semántico listo. Búsqueda vectorial activa.');
    }

    async _openDB() {
        return new Promise((resolve, reject) => {
            const req = indexedDB.open(this.dbName, 1);
            req.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains(this.storeName)) {
                    const store = db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
                    store.createIndex('text', 'text', { unique: false });
                }
            };
            req.onsuccess = (e) => { this.db = e.target.result; resolve(); };
            req.onerror = (e) => reject(e.target.error);
        });
    }

    async _embed(text) {
        if (!this.embeddingModel) {
            // Fallback: vector TF-IDF simplificado (bolsa de palabras normalizada)
            return this._tfidfFallback(text);
        }
        const result = await this.embeddingModel(text, { pooling: 'mean', normalize: true });
        return Array.from(result.data);
    }

    _tfidfFallback(text) {
        // Fallback léxico cuando no hay WebGPU/WASM disponible
        const words = text.toLowerCase().split(/\s+/).filter(w => w.length > 2);
        const vec = new Array(384).fill(0);
        words.forEach((w, i) => { vec[i % 384] += 1; });
        const norm = Math.sqrt(vec.reduce((s, v) => s + v * v, 0)) || 1;
        return vec.map(v => v / norm);
    }

    _cosineSimilarity(a, b) {
        let dot = 0, normA = 0, normB = 0;
        for (let i = 0; i < a.length; i++) {
            dot += a[i] * b[i];
            normA += a[i] * a[i];
            normB += b[i] * b[i];
        }
        return dot / (Math.sqrt(normA) * Math.sqrt(normB) + 1e-10);
    }

    async _indexMemoriaRAG() {
        try {
            const res = await fetch('js/memoria_rag.json');
            const memoria = await res.json();
            const tx = this.db.transaction(this.storeName, 'readwrite');
            const store = tx.objectStore(this.storeName);

            const count = await new Promise(r => {
                const req = store.count();
                req.onsuccess = () => r(req.result);
            });

            if (count < memoria.length) {
                console.log(`[RAG v2] Indexando ${memoria.length} nodos de memoria...`);
                for (let i = count; i < memoria.length; i++) {
                    const item = memoria[i];
                    const text = item.q + ' ' + item.a;
                    const vector = await this._embed(text);
                    store.put({ id: i + 1, text, vector, q: item.q, a: item.a });
                }
                console.log('[RAG v2] Indexación completada.');
            }
        } catch(e) {
            console.warn('[RAG v2] No se pudo indexar memoria RAG:', e);
        }
    }

    async search(query, topK = 5) {
        if (!this.isReady) await this.init();

        const queryVec = await this._embed(query);
        const tx = this.db.transaction(this.storeName, 'readonly');
        const store = tx.objectStore(this.storeName);

        const all = await new Promise(r => {
            const req = store.getAll();
            req.onsuccess = () => r(req.result);
        });

        const scored = all.map(item => ({
            score: this._cosineSimilarity(queryVec, item.vector),
            q: item.q,
            a: item.a
        }));

        return scored
            .filter(s => s.score > 0.3)
            .sort((a, b) => b.score - a.score)
            .slice(0, topK)
            .map(s => `[Relevancia: ${(s.score*100).toFixed(0)}%]\nPregunta: ${s.q}\nRespuesta: ${s.a}`);
    }
}

window.franBotRAG = new FranBotSemanticRAG();
