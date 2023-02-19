/**
 * A function or method that resolves a value for a type or field within a 
 * schema. A resolver is the key architectural component that connects
 * GraphQL fields, graphs edges, queries, mutations, and subscriptions to
 * their respective data sources and microservices.
 * Link1: https://aws.amazon.com/graphql/resolvers/#:~:text=A%20GraphQL%20resolver%20is%20a,data%20sources%20and%20micro%2Dservices.
 * Link2: https://www.apollographql.com/docs/apollo-server/data/resolvers/
 * Link3: https://www.tutorialspoint.com/graphql/graphql_resolver.htm#:~:text=Resolver%20is%20a%20collection%20of,info)%20%3D%3E%20%7B%20result%20%7D
 */
const Query = {
    test: () => 'Test Success, GraphQL server is up & running !!'
}
module.exports = { Query }