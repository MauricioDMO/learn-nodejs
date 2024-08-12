const http = require('node:http')
const { getFreePort } = require('./10.free-port.js')

const server = http.createServer((req, res) => {
  console.log('Nueva conexión')
  res.end('Hola mundo')
})

getFreePort(3000).then(port => {
  server.listen(port, () => {
    console.log(`Servidor en el puerto http://localhost:${port}`)
  })
})
