const http = require('node:http'); // protocolo HTTP
const { findAvailablePort } = require('./10.free-port');

const desiredPort = process.env.PORT ?? 4321;

const server = http.createServer((req, res) => {
  console.log('Request recibido:', req.url);
  res.end('Hello World!');
});

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
  });
});
