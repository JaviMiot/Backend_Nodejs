


console.log("un %s y un %s", "perrito", "gatito")
console.info('hola mundo')
console.warn('es un alias del error')

//* permite hacer asserciones
//console.assert(42=='42')
//console.assert(42==='42')

//* indica en que linea pasa el error
//console.trace('hello')

const util = require('util')
const debuglog = util.debuglog("foo")

debuglog('hello from foo')