const HTTP = require('http');

const server = HTTP.createServer();

server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url === '/echo') {
    let body = [];

    req
      .on('data', (chunk) => {
        console.log(typeof body);
        body.push(chunk);
      })
      .on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        body = Buffer.concat(body).toString();
        res.end(body);
      });
  } else {
    res.statusCode = 404;
    res.end('404');
  }
});

server.listen(8001);
console.log(`servidor en la url http://localhost:8001`);
