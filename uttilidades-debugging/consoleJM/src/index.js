const { Console } = require('console');
const colors = require('colors');

const emojis = {
  arrow: '-->',
  log: '☺️',
  danger: '☠',
  info: 'ℹ',
  warning: '⚠',
  love: '❤',
  count: '🎲',
};

const consoleJM = new Console({
  stdout: process.stdout,
  stderr: process.stderr,
});

consoleJM.log = (msg = '') => {
  console.log('%s  %s  %s'.green, emojis.arrow, emojis.log, msg);
};

consoleJM.error = (msg = '', error = '') => {
  console.error(`%s  %s  %s ${error}`.red, emojis.arrow, emojis.danger, msg);
};

consoleJM.info = (msg = '') => {
  console.info('%s  %s  %s'.blue, emojis.arrow, emojis.info, msg);
};

consoleJM.warn = (msg = '') => {
  console.warn('%s  %s  %s'.yellow, emojis.arrow, emojis.warning, msg);
};

consoleJM.love = (msg = '') => {
  console.log('%s  %s  %s'.red, emojis.arrow, emojis.love, msg);
};

consoleJM.count = (variable = '') => {
  console.count(`${emojis.arrow}  ${emojis.count}  ${variable.blue}`);
};

module.exports = { consoleJM };
