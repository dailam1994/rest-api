import { prisma } from '../../server'
import { responseItems, bodyItem } from './todo.types'

// Validators
// POST a Todo
export const postTodoOpts = {
    schema: {
        body: bodyItem,
        response: {
            201: responseItems
        }
    },
    handler: async (req: any, reply: any) => {
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
    }
}
