class DefensaFranBot {
    constructor(franbot, maxBackups = 5, intervaloBackup = 10) {
        this.franbot = franbot;
        this.maxBackups = maxBackups;
        this.intervaloBackup = intervaloBackup;
        this.contadorInteracciones = 0;
        this.log = [];
    }

    async calcularHash(texto) {
        const encoder = new TextEncoder();
        const data = encoder.encode(texto);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }

    async crearBackup() {
        const estado = JSON.stringify(this.franbot.getState());
        const hash = await this.calcularHash(estado);
        const timestamp = new Date().toISOString();
        const nombre = "backup_" + timestamp.replace(/[:.]/g, '-') + ".json";
        const backups = JSON.parse(localStorage.getItem('franbot_backups') || '[]');
        backups.push({ nombre, estado, hash, timestamp });
        if (backups.length > this.maxBackups) backups.shift();
        localStorage.setItem('franbot_backups', JSON.stringify(backups));
        this.log.push("[" + timestamp + "] Backup creado: " + nombre + " (hash: " + hash.substring(0, 8) + "...)");
        localStorage.setItem('franbot_log', JSON.stringify(this.log));
    }

    async verificarIntegridad() {
        const estado = JSON.stringify(this.franbot.getState());
        const hashActual = await this.calcularHash(estado);
        const backups = JSON.parse(localStorage.getItem('franbot_backups') || '[]');
        if (backups.length === 0) return true;
        const ultimoBackup = backups[backups.length - 1];
        const hashBackup = await this.calcularHash(ultimoBackup.estado);
        if (hashActual !== hashBackup && !this.log.find(l => l.includes('Cambio autorizado'))) {
            console.warn('⚠️ Posible corrupción detectada. Restaurando último backup íntegro...');
            this.franbot.setState(JSON.parse(ultimoBackup.estado));
            this.log.push("[" + new Date().toISOString() + "] RESTAURACIÓN: estado recuperado del backup " + ultimoBackup.nombre);
            localStorage.setItem('franbot_log', JSON.stringify(this.log));
            return false;
        }
        return true;
    }

    registrarCambioAutorizado() {
        this.log.push("[" + new Date().toISOString() + "] Cambio autorizado");
        localStorage.setItem('franbot_log', JSON.stringify(this.log));
    }

    async postInteraccion() {
        this.contadorInteracciones++;
        this.registrarCambioAutorizado();
        if (this.contadorInteracciones % this.intervaloBackup === 0) {
            await this.crearBackup();
        }
    }

    async alIniciar() {
        const integro = await this.verificarIntegridad();
        if (integro) console.log('✅ Estado íntegro. Defensa activa.');
        this.log = JSON.parse(localStorage.getItem('franbot_log') || '[]');
        return integro;
    }
}