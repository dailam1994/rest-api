import { FastifyInstance } from "fastify"
import { getAllTodoOpts, postTodoOpts, putTodoOpts } from '../validators/todo'

async function todoRouter(server: FastifyInstance, opts: any, done: any) {

    // GET All Todos
    server.get('/todos', getAllTodoOpts)

    server.post('/todos', postTodoOpts)

    server.put('/todos/:id', putTodoOpts)

    done()
}

export default todoRouter