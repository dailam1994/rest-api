// ESM
import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import todoRouter from './entities/todo/todo.routes'

export const fastify = Fastify({
    logger: true
})
export const prisma = new PrismaClient()

fastify.register(require('fastify-formbody'))
fastify.register(todoRouter)

// Declare a route
fastify.get('/', (_request, reply) => {
    reply.send({ hello: 'world' })
})

