const { Readable } = require('stream');

const reableStream = new Readable({
  read(size) {
    setTimeout(() => {
      if (this.currentChartCode > 90) {
        this.push(null);
        return;
      }

      this.push(String.fromCharCode(this.currentChartCode++));
    }, 100);
  },
});

reableStream.currentChartCode = 65

reableStream.pipe(process.stdout);
