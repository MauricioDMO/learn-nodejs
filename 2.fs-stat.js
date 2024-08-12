const fs = require('node:fs');

console.log('Leyendo un archivo con Node.js');
console.log('--------------------------------\n');

const stats = fs.statSync('learn-node.md');
console.log('stats:', stats);

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  (stats.size / 1024).toFixed(2) + 'KB',
);