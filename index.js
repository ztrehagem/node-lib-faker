const { fork } = require('child_process');
const path = require('path');

const exec = (filepath) => new Promise((resolve) => {
  fork(path.resolve(filepath), {
    execArgv: ['-r', `${__dirname}/lib/require.js`, ...process.execArgv],
  }).on('exit', (...args) => resolve(args));
});

module.exports = exec;
module.exports.exec = exec;