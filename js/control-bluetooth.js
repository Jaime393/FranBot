// control-bluetooth.js — Puente de Control Web Bluetooth para la Tablet
const ControlBluetooth = {
  dispositivo: null,
  server: null,

  async conectar(nombre) {
    try {
      this.dispositivo = await navigator.bluetooth.requestDevice({ filters: [{ name }] });
      this.server = await this.dispositivo.gatt.connect();
      return `Conectado a ${this.dispositivo.name}`;
    } catch (e) {
      return `Error de conexión: ${e.message}. Toca la pantalla para intentar de nuevo.`;
    }
  },

  async enviar(dato) {
    if (!this.server) return 'Sin conexión.';
    try {
      const encoder = new TextEncoder();
      const servicio = await this.server.getPrimaryService('device_information');
      const caracteristica = await servicio.getCharacteristic('serial_number_string');
      await caracteristica.writeValue(encoder.encode(dato));
      return 'Comando enviado.';
    } catch (e) {
      return `Error al enviar: ${e.message}`;
    }
  }
};

// Integrar con el control táctil de autonomía.js
if (typeof Autonomia !== 'undefined') {
  Autonomia.conectarBluetooth = ControlBluetooth.conectar.bind(ControlBluetooth);
  Autonomia.enviarBluetooth = ControlBluetooth.enviar.bind(ControlBluetooth);
}
