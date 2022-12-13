import { createServer } from 'http'
import { createYoga } from 'graphql-yoga'
import { schema } from './schema'
const yoga = createYoga({ schema })

const server = createServer(yoga)
const port = Number(process.env.API_PORT) || 4000

server.listen(port, () => {
  console.log(`🚀 GraphQL Server ready at http://localhost:${port}/graphql`)
})
