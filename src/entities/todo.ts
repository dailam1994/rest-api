import { FastifyInstance } from "fastify"
import { prisma } from '../server'

// Declares Variables
const responseItems = {
    type: 'array',
    items: {
        type: 'object',
        properties: {
            id: { type: 'string' },
            content: { type: 'string' },
            isDone: { type: 'boolean', nullable: true }
        }
    }
}

const bodyItem = {
    type: 'object',
    required: ['content', 'isDone'],
    properties: {
        content: { type: 'string' },
        isDone: { type: 'boolean', nullable: true }
    }
}

// Validators
// GET All Todos
const getAllTodoOpts = {
    schema: {
        response: {
            200: responseItems
        }
    }
}

// POST a Todo
const postTodoOpts = {
    schema: {
        body: bodyItem,
        response: {
            201: responseItems
        }
    }
}

// POST a Todo
const putTodoOpts = {
    schema: {
        body: bodyItem,
        response: {
            200: responseItems
        },
        params: {
            type: 'object',
            additionalProperties: false,
            required: ['id'],
            properties: {
                id: { type: 'string' }
            }
        }
    }
}

async function todoRouter(server: FastifyInstance, opts: any, done: any) {

    // GET All Todos
    server.get('/todos', getAllTodoOpts, async (_req: any, reply: any) => {
        try {
            const todo = await prisma.todo.findMany()
            reply.status(200).send(todo)
            console.log('Read All Todo Successfully')
        } catch (error) {
            reply.status(500).send('Error message - Failed to Read All Todo')
            console.log(error)
        }
    })

    server.post('/todos', postTodoOpts, async (req: any, reply: any) => {
        try {
            const { content, isDone }: any = req.body

            await prisma.todo.create({
                data: {
                    content: String(content),
                    isDone: Boolean(isDone)
                }
            })

            reply.status(201).send('Todo Created Successfully')
            console.log('Created Todo Successfully!')
        } catch (error) {
            reply.status(500).send('Error message - Failed to Create Todo')
            console.log(error)
        }
    })

    server.put('/todos/:id', putTodoOpts, async (req: any, reply: any) => {
        try {
            const { id }: any = req.params
            const { content, isDone }: any = req.body

            await prisma.todo.update({
                where: { id: String(id) },
                data: {
                    content: String(content),
                    isDone: Boolean(isDone)
                }
            })

            reply.status(200).send('Todo Updated Successfully')

            console.log('Updated Todo Successfully!')
        } catch (error) {
            reply.status(500).send('Error message - Failed to Update Todo')
            console.log(error)
        }
    })

    done()
}

export default todoRouter