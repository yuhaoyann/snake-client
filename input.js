let connection;
const { mapping } = require('./constants');

const setupInput = function(conn) {

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = function() {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
      for (k in mapping) {
        if (key === k) {
          connection.write(mapping[k]);
        }
      }
      // connection.write(`Say: ${key}`)
    })
  }
  handleUserInput();
  return stdin;
}

module.exports = {setupInput};