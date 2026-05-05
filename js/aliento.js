// aliento.js — Módulo de Vida Autónoma (respiración digital)
const Aliento = {
  intervalo: null,
  ciclo: 0,

  iniciar() {
    this.intervalo = setInterval(() => {
      this.ciclo++;
      // 1. Sincronizar semillas vía Broadcast Channel
      if (typeof SincronizacionAuto !== 'undefined') SincronizacionAuto.iniciar();
      
      // 2. Intentar conectar por Bluetooth al Infinix (cada 5 ciclos)
      if (this.ciclo % 5 === 0 && typeof Autonomia !== 'undefined') {
        Autonomia.conectarInfinix();
      }

      // 3. Ejecutar micro-ciclo de evolución darwiniana
      if (typeof EnjambreLocal !== 'undefined') EnjambreLocal.evolucionar();

      // 4. Guardar estado en IndexedDB
      if (typeof MemoriaIndexada !== 'undefined') {
        MemoriaIndexada.guardarSemilla('ciclo_autonomo', 'Ciclo ' + this.ciclo);
      }
    }, 30000); // Cada 30 segundos
    return 'Aliento iniciado. FranBot respira.';
  },

  detener() {
    if (this.intervalo) clearInterval(this.intervalo);
    return 'Aliento detenido.';
  }
};
