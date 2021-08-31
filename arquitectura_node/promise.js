const asyncCallbacks = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('hello world');
      } else {
        reject('hello error');
      }
    }, 2000);
  });
};

asyncCallbacks()
.then(data=>console.log(data))
.catch((error) => console.error(error));
