import { FastifyInstance } from "fastify"
import { getAllTodoOpts } from './todo.list'
import { postTodoOpts } from './todo.create'
import { putTodoOpts } from './todo.update'

async function todoRouter(server: FastifyInstance, opts: any, done: any) {

    // GET All Todos
    server.get('/todos', getAllTodoOpts)

    server.post('/todos', postTodoOpts)

    server.put('/todos/:id', putTodoOpts)

    done()
}

export default todoRouter