const http = require('http');
const { fork } = require('child_process');

http.get('http://example.com/');

fork(`${__dirname}/child.js`).on('exit', code => process.exit(code));


