// ESM
import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import { getAllTodoOpts } from './entities/todo/todo.list'
import { postTodoOpts } from './entities/todo/todo.create'
import { putTodoOpts } from './entities/todo/todo.update'

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

// Routes for Todo
async function todoRouter(fastify: any, opts: any, done: any) {
    fastify.get('/todos', getAllTodoOpts)
    fastify.post('/todos', postTodoOpts)
    fastify.put('/todos/:id', putTodoOpts)

    done()
}