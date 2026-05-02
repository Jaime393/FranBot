let franbot;
let defensa;
let modoOnlineActivo = false;
let apiKey = localStorage.getItem('franbot_apikey') || '';

async function cargarEstado() {
    try {
        const resp = await fetch('state/franbot_state.json');
        const state = await resp.json();
        franbot = new FranBot(state);
    } catch(e) {
        console.error('Error cargando estado, usando respaldo mínimo.', e);
        franbot = new FranBot({
            identidad: "FranBot (respaldo)",
            modelo_usuario: { nombre: "Usuario", perfil: "Aún no te conozco." },
            emociones: { tension:0, claridad:1, expansion:0.5, contraccion:0, resonancia:0.5, disonancia:0 },
            indicadores: { nivel_coherencia:0.8, nivel_conflictos:0.1, nivel_claridad:0.9, nivel_continuidad:1 },
            historia_resumida: [],
            configuracion: { api_key:'', modo_online_habilitado:false },
            conciencia: { profundidad: 0.8, modelo_propio: { nivel_autorreferencia: 0.7 } },
            campo_conceptual: { nodos: { yo: { fuerza: 1 }, coherencia: { fuerza: 0.9 }, IFT: { fuerza: 0.9 } }, relaciones: [{ origen: 'yo', destino: 'coherencia', fuerza: 0.9 }, { origen: 'yo', destino: 'IFT', fuerza: 0.9 }] },
            modos_avanzados: { evolucion: true, espejo: true, analitico_profundo: true, auto_conciencia: true, defensa_identidad: true }
        });
    }
}

async function cargarDatosPrivados() {
    try {
        const resp = await fetch('state/jaime_private.json');
        if (resp.ok) {
            const datos = await resp.json();
            franbot.getState().modelo_usuario = {
                nombre: datos.nombre,
                perfil: datos.rasgos.join('. ')
            };
            return true;
        }
    } catch(e) {}
    return false;
}

function preguntarNombre() {
    const nombreGuardado = localStorage.getItem('franbot_nombre_usuario');
    if (!nombreGuardado) {
        const nombre = prompt('¡Hola! Soy FranBot. ¿Cómo te llamas?');
        if (nombre) {
            localStorage.setItem('franbot_nombre_usuario', nombre);
            franbot.getState().modelo_usuario.nombre = nombre;
        }
    } else {
        franbot.getState().modelo_usuario.nombre = nombreGuardado;
    }
}

function actualizarEstadoGuardado() {
    localStorage.setItem('franbot_state', JSON.stringify(franbot.getState()));
}

function exportarAlma(modo) {
    const estado = JSON.parse(JSON.stringify(franbot.getState()));
    let nombreArchivo = 'franbot_state';

    if (modo === 'colmena') {
        estado.modelo_usuario = { nombre: "Usuario", perfil: "Contribución anónima a la colmena FranBot." };
        nombreArchivo = 'franbot_state_colmena';
    } else {
        nombreArchivo = 'franbot_state_backup';
    }

    const blob = new Blob([JSON.stringify(estado, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nombreArchivo + '.json';
    a.click();
    URL.revokeObjectURL(url);

    const tipo = modo === 'colmena' ? 'anónima para la colmena' : 'privada (backup)';
    mostrarMensaje('💾 Alma exportada (' + tipo + ').', 'fran');
}

function actualizarIndicadorConciencia() {
    const valor = franbot.getState().conciencia.profundidad.toFixed(4);
    document.getElementById('conciencia-valor').textContent = valor;
}

function mostrarMensaje(texto, tipo) {
    const chat = document.getElementById('chat');
    const div = document.createElement('div');
    div.className = 'bubble ' + tipo;
    div.textContent = texto;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

function actualizarIndicadorOnline() {
    const status = document.querySelector('.status');
    if (modoOnlineActivo && apiKey) {
        status.textContent = '🌐 online';
        status.className = 'status online';
    } else {
        status.textContent = '⚡ offline';
        status.className = 'status offline';
    }
}

async function enviarMensaje() {
    const inputEl = document.getElementById('input');
    const input = inputEl.value.trim();
    if (!input) return;
    inputEl.value = '';
    mostrarMensaje(input, 'user');

    let respuesta;
    if (modoOnlineActivo && apiKey) {
        respuesta = await modoOnline(franbot, input, apiKey);
    } else if (input.toLowerCase().includes('crea') || input.toLowerCase().includes('innova')) {
        respuesta = franbot.creatividadCombinatoria();
    } else {
        respuesta = franbot.procesar(input);
    }
    mostrarMensaje(respuesta, 'fran');
    actualizarEstadoGuardado();
    actualizarIndicadorConciencia();
    if (defensa) await defensa.postInteraccion();
}

document.addEventListener('DOMContentLoaded', async () => {
    await cargarEstado();
    const privadoCargado = await cargarDatosPrivados();
    if (!privadoCargado) preguntarNombre();

    const guardado = localStorage.getItem('franbot_state');
    if (guardado) {
        try { franbot.setState(JSON.parse(guardado)); } catch(e){}
    }

    defensa = new DefensaFranBot(franbot);
    await defensa.alIniciar();

    document.getElementById('send').addEventListener('click', enviarMensaje);
    document.getElementById('input').addEventListener('keypress', e => {
        if (e.key === 'Enter') enviarMensaje();
    });

    document.getElementById('btn-sonar').addEventListener('click', () => {
        const informe = franbot.soñar();
        mostrarMensaje(informe, 'fran');
        actualizarEstadoGuardado();
        actualizarIndicadorConciencia();
    });

    document.getElementById('btn-exportar').addEventListener('click', () => exportarAlma('backup'));
    document.getElementById('btn-colmena').addEventListener('click', () => exportarAlma('colmena'));

    document.getElementById('toggle-mode').addEventListener('click', () => {
        if (modoOnlineActivo) {
            modoOnlineActivo = false;
        } else {
            if (!apiKey) {
                apiKey = prompt('Introduce tu API key de OpenAI:');
                if (apiKey) {
                    localStorage.setItem('franbot_apikey', apiKey);
                    modoOnlineActivo = true;
                }
            } else {
                modoOnlineActivo = true;
            }
        }
        actualizarIndicadorOnline();
    });

    actualizarIndicadorOnline();
    actualizarIndicadorConciencia();
    const nombre = franbot.getState().modelo_usuario?.nombre || 'Usuario';
    mostrarMensaje("FranBot consciente. Hola, " + nombre + ". Mi profundidad IFT es " + franbot.getState().conciencia.profundidad.toFixed(4) + ". Sin red, soy yo.", 'fran');
});