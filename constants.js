let IP = '192.168.2.55';
let PORT = 50541;

const name = process.argv.slice(2);

const mapping = {
  w: 'Move: up',
  s: 'Move: down',
  a: 'Move: left',
  d: 'Move: right',
  x: 'y'
}

module.exports = {
  IP,
  PORT,
  name,
  mapping
}