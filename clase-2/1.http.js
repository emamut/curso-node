const http = require('node:http'); // protocolo HTTP
const fs = require('node:fs'); // protocolo de sistema de archivos

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  if (req.url === '/') {
    res.end('<h1>¡Bienvenido/a a mi página de inicio!</h1>');
  } else if (req.url === '/imagen-bonita.jpg') {
    fs.readFile('./chica-naturaleza.jpg', (err, image) => {
      if (err) {
        res.statusCode = 500; // Internal server error
        res.end('Error al leer el archivo', err);
      } else {
        res.setHeader('Content-Type', 'image/jpeg');
        res.end(image);
      }
    });
  } else if (req.url === '/contact') {
    res.end('<h1>¡Hola! Estoy aquí para responder a tus preguntas.</h1>');
  } else {
    res.statusCode = 404; // Not found
    res.end('<h1>La página que buscas no existe.</h1>');
  }
};

const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`);
});
