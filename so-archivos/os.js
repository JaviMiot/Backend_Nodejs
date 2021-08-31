const os = require('os');

//console.log('CPU INFO:', os.cpus());

/*
console.log(
  'iP DE LA MAQUINA ',
  os.networkInterfaces().eth0.map((i) => i.address)
);
*/

console.log('memoria libre', os.freemem());
console.log('tipo sistema operativo', os.type());
console.log('sistema operativo version', os.release());
console.log('user info', os.userInfo())