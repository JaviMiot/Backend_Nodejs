const fs = require('fs');
const HTTP = require('http');

const server = HTTP.createServer();

server.on('request', (req, res) => {
  fs.readFile('./big', (err, data) => {
    if (err) {
      console.error('error', err);
    }
    res.end(data);
  });
});

server.listen(8000);
