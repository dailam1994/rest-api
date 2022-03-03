// ESM
import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import todoRouter from './entities/todo/todo.routes'

const fastify = Fastify({
    logger: true
})
export const prisma = new PrismaClient()

fastify.register(require('fastify-formbody'))
fastify.register(todoRouter)

// Declare a route
fastify.get('/', (_request, reply) => {
    reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen(3000, (err, address) => {
    if (err) throw err
    console.log(`Server is now listening on ${address}`)
})