import {
  platform,
  version,
  arch,
  cpus,
  freemem,
  totalmem,
  uptime
} from 'node:os';

console.log('Información del sistema operativo:');

console.log('Nombre del sistema operativo:', platform());
console.log('Nombre de la versión:', version());
console.log('Nombre de la arquitectura:', arch());
console.log('CPUs:', cpus());
console.log('Memoria libre:', freemem() / 1024 / 1024, 'MB');
console.log('Memoria total:', totalmem() / 1024 / 1024, 'MB');
console.log('uptime:', uptime() / 60 / 60, 'horas');
