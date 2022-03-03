import { prisma } from '../../server'
import { Items } from './todo.types'


const TodoCreateUpdate = {
    type: 'object',
    required: ['isDone'],
    properties: {
        isDone: { type: 'boolean', nullable: true }
    }
}

// Validators
// POST a Todo
export const putTodoOpts = {
    schema: {
        body: TodoCreateUpdate,
        response: {
            200: {
                type: 'array',
                items: Items
            }
        },
        params: {
            type: 'object',
            additionalProperties: false,
            required: ['id'],
            properties: {
                id: { type: 'string' }
            }
        }
    },
    handler: async (req: any, reply: any) => {
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
    }
}
