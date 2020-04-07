import express from 'express'
import cors from 'cors'
import compression from 'compression'
import { createServer } from 'http'

const app = express()
app.use('*', cors())
app.use(compression())

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Correcto desde la academia'
  })
})

const PORT = 5200
const httpServer = createServer(app)
httpServer.listen({
  port: PORT
}, () => {
  console.log(`Aplicacion corriendo en el puerto http://localhost:${PORT}`);
})