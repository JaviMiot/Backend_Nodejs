const HTTP = require('http');

const server = HTTP.createServer();

server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url === '/cumple') {
    let body = [];

    const birthDate = {
      day: '',
      month: '',
      year: '',
      age: '',
    };

    req
      .on('data', (chunck) => {
        body.push(chunck);
        body = Buffer.concat(body).toString();
        const dateBorn = body.split('/');
        [birthDate.day, birthDate.month, birthDate.year] = dateBorn;
        birthDate.age = getAge(birthDate.year);
      })
      .on('end', () => {
        res.writeHead(404, { contentType: 'application/json' });
        res.end(JSON.stringify(birthDate));
      });
  } else {
    res.end('Error 404');
  }
});

const getAge = (birthYear) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return currentYear - Number(birthYear);
};

server.listen(8002);
