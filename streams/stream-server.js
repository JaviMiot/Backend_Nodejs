const fs = require('fs');
const HTTP = require('http');

const server = HTTP.createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('./big')

  src.pipe(res)
});

server.listen(8000);
