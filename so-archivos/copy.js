const fs = require('fs');

fs.copyFile('Naranja.txt', 'Limon.txt', (error) => {
  if (error) {
    console.error(error);
  }

  console.log('naranja.txt fue copiado como limon.txt');
});
