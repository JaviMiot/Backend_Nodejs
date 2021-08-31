const asyncCallbacks = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('hello world');
      } else {
        reject(new Error('Hello error'));
      }
    }, 100);
  });
};

async function funError() {
  try {
    data = await asyncCallbacks();
    console.log(data);
  } catch (error) {
      console.error(error.message);
  }
}

funError();
