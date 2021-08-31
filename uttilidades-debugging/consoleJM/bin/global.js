#!/usr/bin/env node
//se va a ejecutar como un bash

let { consoleJM } = require('../src/index.js');
consoleJM.log('Es log');
consoleJM.error('Es un error', new Error('error'));
consoleJM.error('Es un error');
consoleJM.info('Es info');
consoleJM.warn('Es un warning');
consoleJM.love('Nunca pares de aprender');
consoleJM.count('dato');
