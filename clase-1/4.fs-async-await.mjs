// Esto sólo en los modulos nativos
// que no tienen promesas nativas

// const { promisify } = require('node:util');
// const readFilePromise = promisify(fs.readFile);

import { readFile } from 'node:fs/promises';

console.log('Leyendo el primer archivo...');
const text = await readFile('archivo.txt', 'utf8');
console.log('Primer texto:', text);

console.log('--> Hacer cosas mientras lee el archivo...');

console.log('Leyendo el segundo archivo...');
const secondText = await readFile('archivo2.txt', 'utf8');
console.log('Segundo texto:', secondText);
