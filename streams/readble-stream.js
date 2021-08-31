const { Readable } = require('stream');

const reableStream = new Readable();

reableStream.push(`${0 / 0} `.repeat(10).concat('batman, batman!'));
reableStream.push(null)
reableStream.pipe(process.stdout);
