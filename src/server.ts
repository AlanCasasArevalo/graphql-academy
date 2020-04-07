import express from 'express'
import cors from 'cors'
import compression from 'compression'
import { createServer } from 'http'
import { ApolloServer } from 'apollo-server-express'
import expressPlayGround from 'graphql-playground-middleware-express'
import schema from './schema'

const app = express()
app.use('*', cors())
app.use(compression())

const server = new ApolloServer({
  schema,
  introspection: true
})

server.applyMiddleware({ app })

app.get('/', expressPlayGround({
  endpoint:'/graphql'
}))

const PORT = 5200
const httpServer = createServer(app)
httpServer.listen({
  port: PORT
}, () => {
  console.log(`Aplicacion corriendo en el puerto http://localhost:${PORT}/graphql`);
})