const fs = require('node:fs')

fs.readFile('learn-node.md', 'utf-8', (err, data) => { // Como tercer parámetro se pasa una función de callback
  if (err) {
    console.error(err)
    return
  }

  console.log(data)
})
