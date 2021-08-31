const { Transform } = require('stream');

const camelCaseStream = new Transform({
  transform(chunk, encoding, callback) {
    const phrase = chunk.toString();
    const divPhrase = phrase.split(' ');

    divPhrase.forEach((word) => {
      word = word.toLowerCase();
      word = word.charAt(0).toUpperCase() + word.substring(1)
      camelCasePhrase += word;
    });

    this.push(camelCasePhrase);

    callback();
  },
});

camelCaseStream.world = [];
camelCaseStream.dataBit = 0;

process.stdin.pipe(camelCaseStream).pipe(process.stdout);
