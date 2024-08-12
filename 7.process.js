const process = require('node:process')

const [, , flag, value] = process.argv

console.log(`Flag: ${flag}, Value: ${value}`)

process.on('beforeExit', () => {
  console.log('El proceso va a terminar')
})

process.on('exit', () => {
  console.log('El proceso acabó')
})

console.log(process.exit(0)) // Función para salir del proceso 1 = error, 0 = correcto

// Current working directory
console.log(process.cwd())

// Plataforma
console.log(process.platform)

// Variables de entorno
console.log(process.env.pedro) // pedro=valor node 7.process.js
