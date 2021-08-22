const net = require('net');

const connect = function() {

  const conn = net.createConnection({
    host: '192.168.2.55',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: YHY');
    // setInterval(() => conn.write('Move: up'), 50);
  })

  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
}

module.exports = {
  connect
};