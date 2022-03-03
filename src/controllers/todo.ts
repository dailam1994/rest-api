import { prisma } from '../../server'

// GET All Todos
export const getAllTodos = async (_req: any, reply: any) => {
    try {
        const todo = await prisma.todo.findMany()
        reply.status(200).send(todo)
        console.log('Read All Todo Successfully')
    } catch (error) {
        reply.status(500).send('Error message - Failed to Read All Todo')
        console.log(error)
    }
}

// POST Todo
export const postTodo = async (req: any, reply: any) => {
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

// PUT Todo
export const putTodoById = async (req: any, reply: any) => {
    try {
        const { id }: any = req.params
        const { content, isDone }: any = req.body

        const todo = await prisma.todo.update({
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