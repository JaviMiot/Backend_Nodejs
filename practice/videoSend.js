const HTTP = require('http');
const fs = require('fs');

const server = HTTP.createServer();

server.on('request', (req, res) => {
  fs.readFile('./video.mp4', (error, data) => {
    res.writeHead(200, { contentType: 'video/mp4' });
    res.end(data);
  });
});

server.listen(8000);
