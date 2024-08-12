const fs = require('node:fs/promises')

Promise.all([
  fs.readFile('learn-node.md', 'utf-8'),
  fs.readFile('learn-node.md', 'utf-8'),
  fs.readFile('learn-node.md', 'utf-8')
])
  .then(data => { // data es un array con los datos de los archivos
    console.log(data)
  })
  .catch(err => {
    console.error(err)
  })
