import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import jwt from '@fastify/jwt'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(jwt, {
  secret: 'rgjdgnv',
})
app.register(authRoutes)
app.register(memoriesRoutes)
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Running the server')
  })
