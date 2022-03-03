import { prisma } from '../../server'
import { Items } from './todo.types'

// Validators
// GET All Todos
export const getAllTodoOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Items
            }
        }
    },
    handler: async (_req: any, reply: any) => {
        try {
            const todo = await prisma.todo.findMany()
            reply.status(200).send(todo)
            console.log('Read All Todo Successfully')
        } catch (error) {
            reply.status(500).send('Error message - Failed to Read All Todo')
            console.log(error)
        }
    }
}
