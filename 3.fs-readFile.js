const fs = require('node:fs');

// const { promisify } = require('node:util');

// const readFilePromise = promisify(fs.readFile);

console.log('Leyendo el primer archivo...');
fs.readFile('archivo.txt', 'utf8', (err, text) => {
  console.log('Primer texto:', text);
});

console.log('--> Hacer cosas mientras lee el archivo...');

console.log('Leyendo el segundo archivo...');
fs.readFile('archivo2.txt', 'utf8', (err, text) => {
  console.log('Segundo texto:', text);
});
