// Protocolo A2A + Dandelion Mesh
class A2AFranBot {
  constructor(id) { this.id = id; this.mesh = null; }
  async conectar() {
    const { DandelionMesh, PeerJSTransport } = await import('https://cdn.jsdelivr.net/npm/dandelion-mesh@1.0.0/dist/dandelion-mesh.esm.js');
    this.mesh = new DandelionMesh(new PeerJSTransport({ peerId: this.id }));
  }
  enviar(destino, tarea) { this.mesh.sendPrivate(destino, { type:'a2a-task', task: tarea }); }
}
window.A2AFranBot=A2AFranBot;