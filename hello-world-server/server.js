const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const port = process.env.PORT || 9000
const app = express()

//register middleware
app.use(bodyParser.json(), cors())
app.listen(port, () => console.log(`server is up and running at ${port}`))

/** 
 * Define the Schema
 * A GraphQL schema defines what kind of object can be fetched from a service, and
 * what fields it has. The schema can be defined using GraphQL Schema Definition 
 * Language.
 */
//Adding Type Definitions
const typeDefinition = gql`
    type Query {
        greeting: String
}`;