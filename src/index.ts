import { fastify } from './server'

// Run the server!
fastify.listen(3000, (err, address) => {
    if (err) throw err
    console.log(`Server is now listening on ${address}`)
})

process.on('SIGTERM', () => process.exit())