const path = require('node:path')

console.log(path.sep) // Divisor de rutas en el sistema operativo

const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const ext = path.extname(filePath)
console.log(ext)
