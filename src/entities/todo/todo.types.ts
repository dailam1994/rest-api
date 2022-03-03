// Declares Variables
export const responseItems = {
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

export const bodyItem = {
    type: 'object',
    required: ['content', 'isDone'],
    properties: {
        content: { type: 'string' },
        isDone: { type: 'boolean', nullable: true }
    }
}
