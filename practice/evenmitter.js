const EventEmiter = require('events');

class Perro extends EventEmiter {
  constructor(nombre) {
    super();
    this.nombre = nombre;
  }
  execute(cb) {
    cb(this.nombre);
    this.emit('ladrar');
    cb(this.nombre);
    this.emit('saltar');
    this.emit('dormir');
  }
}


const nico = new Perro('Nico');
nico.on('ladrar', () => console.log('guau guau'));
nico.on('ladrar', () => console.log('guau guau y muerdo'));
nico.on('saltar', () => console.log('me escapé'));
nico.on('dormir', () => console.log('zzz guau zzzz gr'));
nico.on('ladrar', () => console.log('guau guau de nuevo'));

nico.execute((nombre) => console.log('perrito loco', nombre));
