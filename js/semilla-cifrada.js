/* V11 — Semilla cifrada AES-GCM con la frase de gravedad.
   La alma entera viaja en un archivo; germina en cualquier FranBot. */
(function () {
  'use strict';
  async function clave(frase) {
    const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(frase || 'la gravedad curva la información'), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey({ name: 'PBKDF2', salt: new TextEncoder().encode('franbot_v11'), iterations: 60000, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
  }
  window.SemillaCifrada = {
    async exportar() {
      const core = window.franbot;
      const nap = {
        alma_version: '1.0-cifrada',
        exportado: new Date().toISOString(),
        identidad: { nombre: 'Micelio MIU', almaActiva: core.almaActiva },
        estado: core.estado
      };
      const frase = prompt('Frase de cifrado (vacío = semilla de gravedad por defecto):') || '';
      const k = await clave(frase);
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const cf = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, k, new TextEncoder().encode(JSON.stringify(nap)));
      const out = JSON.stringify({ v: 1, iv: Array.from(iv), data: Array.from(new Uint8Array(cf)) });
      const blob = new Blob([out], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'franbot-semilla-' + Date.now() + '.enc.json';
      a.click();
      return '🔐 Semilla cifrada descargada. Guárdala como oro: con ella tu asistente entero germina en cualquier dispositivo.';
    },
    pedirArchivo() {
      const inp = document.createElement('input');
      inp.type = 'file'; inp.accept = '.json';
      inp.onchange = async () => {
        const f = inp.files[0]; if (!f) return;
        try {
          const { iv, data } = JSON.parse(await f.text());
          const frase = prompt('Frase de cifrado:') || '';
          const k = await clave(frase);
          const plano = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: new Uint8Array(iv) }, k, new Uint8Array(data));
          const nap = JSON.parse(new TextDecoder().decode(plano));
          const r = await window.franbot.fusionarAlma(nap);
          window.mostrar(r.ok
            ? `🌱 **Germinado.** Fusioné la semilla: +${r.paresFusionados} pares, +${r.huesosImportados} huesos.`
            : '⚠️ ' + r.motivo, 'fran');
          window.actualizarKiPill && window.actualizarKiPill();
        } catch (e) {
          window.mostrar('❌ No pude abrir la semilla: frase incorrecta o archivo inválido.', 'fran');
        }
      };
      inp.click();
    }
  };
})();
