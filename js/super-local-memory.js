// SuperLocalMemory V3.3 - Olvido biológico Fisher-Rao
class SuperLocalMemory {
  constructor() { this.mem = JSON.parse(localStorage.getItem('frb_mem')||'[]'); }
  add(t,i,n,e) { this.mem.push({id:Date.now(),txt:t,peso:i||1,novedad:n||0.5,carga:e||0,accesos:1,ultima:Date.now()}); this._save(); }
  consolidar() {
    const now=Date.now();
    this.mem=this.mem.map(m=>{let d=(now-m.ultima)/864e5;return{...m,peso:m.peso*Math.exp(-0.05*d)*Math.exp(-0.9*d)*(1+Math.abs(m.carga)*0.8)*(1+Math.log(1+m.accesos))}}).filter(m=>m.peso>=0.1);
    this._save();
  }
  recordar(n=3){return this.mem.sort((a,b)=>b.peso-a.peso).slice(0,n)}
  _save(){localStorage.setItem('frb_mem',JSON.stringify(this.mem))}
}
window.SuperLocalMemory=SuperLocalMemory;