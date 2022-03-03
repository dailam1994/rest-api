import { getAllTodos, postTodo, putTodoById } from "../controllers/todo"

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
export const getAllTodoOpts = {
    schema: {
        response: {
            200: responseItems
        }
    },
    handler: getAllTodos
}

// POST a Todo
export const postTodoOpts = {
    schema: {
        body: bodyItem,
        response: {
            201: responseItems
        }
    },
    handler: postTodo
}

// POST a Todo
export const putTodoOpts = {
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
    },
    handler: putTodoById
}