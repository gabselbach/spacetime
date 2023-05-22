import 'dotenv/config'
import fastify from 'fastify'
import cors from '@fastify/cors'
import multipart from '@fastify/multipart'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import jwt from '@fastify/jwt'
import { uploadRoutes } from './routes/upload'
import { resolve } from 'node:path'

const app = fastify()

app.register(multipart)
app.register(cors, {
  origin: true,
})

app.register(require('@fastify/static'), {
  root: resolve(__dirname, '../uploads'),
  prefix: '/uploads',
})

app.register(jwt, {
  secret: 'rgjdgnv',
})
app.register(uploadRoutes)
app.register(authRoutes)
app.register(memoriesRoutes)
app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('Running the server')
  })
