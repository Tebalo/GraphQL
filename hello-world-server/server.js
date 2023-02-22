const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const port = process.env.PORT || 9000
const app = express()

//register middleware
app.use(bodyParser.json(), cors())
//app.listen(port, () => console.log(`server is up and running at ${port}`))

/** 
 * Define the Schema
 * A GraphQL schema defines what kind of object can be fetched from a service, and
 * what fields it has. The schema can be defined using GraphQL Schema Definition 
 * Language.
 */
//Adding Type Definitions
const typeDefinition = `
    type Query {
        greeting: String
}`
/**
 * Adding a resolver
 */
const resolverObject = {
    Query: {
        greeting: () => 'Hello GraphQL From TutorialsPoint !!'
    }
}

/**
 * Bind the schema and the resolver
 */
const { makeExecutableSchema } = require('graphql-tools')
const schema = makeExecutableSchema({ typeDefs: typeDefinition, resolvers: resolverObject })

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
// create routes for graphql and graphical
app.use('/graphql', graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
app.listen(port, () => console.log(`server is up and running ${port}`))
