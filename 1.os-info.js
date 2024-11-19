const os = require('node:os');

console.log('Información del sistema operativo:');

console.log('Nombre del sistema operativo:', os.platform());
console.log('Nombre de la versión:', os.version());
console.log('Nombre de la arquitectura:', os.arch());
console.log('CPUs:', os.cpus());
console.log('Memoria libre:', os.freemem() / 1024 / 1024, 'MB');
console.log('Memoria total:', os.totalmem() / 1024 / 1024, 'MB');
console.log('uptime:', os.uptime() / 60 / 60, 'horas');
