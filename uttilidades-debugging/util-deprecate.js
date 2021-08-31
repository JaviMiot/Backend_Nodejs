const util = require('util');

const helloPluto = util.deprecate(() => {
  console.log('helloPluto');
}, 'pluto is deprecated. it is not a planet anymore');

helloPluto()