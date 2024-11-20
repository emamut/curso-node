const path = require('node:path');

//  barra separadora de carpetas según el sistema operativo
console.log(path.sep);

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename('temp/emamut-secret-files/passwords.txt');
console.log(base);

const filename = path.basename(
  'temp/emamut-secret-files/passwords.txt',
  '.txt'
);
console.log(filename);

const extension = path.extname('my.super.image.png');
console.log(extension);
