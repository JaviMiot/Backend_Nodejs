const asyncCallbacks = function (cb) {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return cb(null, 'hello world');
    } else {
      return cb('hello error', 'hello world');
    }
  }, 2000);
};

asyncCallbacks((err, message) => {
  if (err) {
    console.error(err);
  } else {
    console.log('menssge', message);
  }
});
