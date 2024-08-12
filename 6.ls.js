const fs = require('node:fs')
const fsPromises = require('node:fs/promises')

fs.readdir('./', (err, files) => {
  if (err) {
    console.log(err)
  } else {
    files.forEach(file => {
      console.log(file)
    })
  }
})

fsPromises.readdir('./')
  .then(files => {
    files.forEach(file => {
      console.log(file)
    })
  })
  .catch(err => {
    console.log(err)
  })
