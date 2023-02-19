# GraphQL
 GraphQL is an open source server-side technology which was developed by Facebook to optimize RESTful API calls. It is an execution engine and a data query language.
# Why GrapQL
RESTful APIs follow clear and well-structured resource-oriented approach. However, when the data gets more complex, the routes get longer. Sometimes it
is not possible to fetch data with a single request. This is where GraphQL comes handy. GraphQL structures data in the form of a graph with its powerful
query syntax for traversing, retrieving, and modifying.

# Ask for what you want --- and get it
Send a GraphQL query to your API and get exactly what you need. GraphQL queries always return predictable results. Applications using GraphQL are fast and stable. Unlike Restful services, these applications can restrict data that should be fetched from the server.

The following example will help you understand this better:

Let us consider a business object Student with the attributes id, firstName, lastName and collegeName. Suppose a mobile application needs to fetch only the firstName and id. If we design a REST endpoint like /api/v1/students, it will end up fetching data for all the field for a student object. This means, data is over fetched by the RESTful service. This problem can be solved by using GraphQL.

Consider the GraphQL query given below:
{
    students{
        id,
        firstName
    }
}

This will return values only for the id and firstname fields. The query will not fetch values for other attributes of the student object. The response of the query illustrated above is as shown below:
{
    "data":{
        "students":[
            {
                "id":"S1001",
                "firstName:"Mohtashim"
            },
            {
                "id":"S1002",
                "firstName:"Kannan"
            }
        ]
    }
}

# Get many resources in a single request
GraphQL queries help to smoothly retrieve associated business objects, while typical REST APIs require loading from multiple URLs. GraphQL APIs fetch all the data your application need in a single request. Applications using GraphQL can be quick even on slow mobile network connections.

Let us consider one more business object, College which has the attributes: name and location. The Student business object has an association relationship with College object. If we were to use a REST API in order to fetch the details of students and their college, we will end up making two requests to the server like /api/v1/students and /api/v1/colleges. This will lead to fetching of data with each request. So mobile applications are forced to make multiple calls to the server to get the desired data.

However, the mobile application can fetch details for both Student and College objects in a single request by using GraphQL.

The following is a GraphQL query to fetch data:
{
    students{
        id,
        firstName,
        lastName,
        college{
            name,
            location
        }
    }
}
The output of the above query contains exactly those fields we have requested for as shown below:
{
    "data":{
        "students":[
            {
                "id":"S1001",
                "firstName:"Mohtashim",
                "lastName":"Mohammad",
                "college":{
                    "name":"CUSAT",
                    "location":"Kerala"
                }
            },
            {
                "id":"S1002",
                "firstName:"Kannan",
                "lastName":"Sudhakaran",
                "college":{
                    "name":"AMU",
                    "location":"Uttar Pradesh"
                }
            },
            {
                "id":"S1003",
                "firstName:"Kiran",
                "lastName":"Panigrahi",
                "college":{
                    "name":"AMU",
                    "location":"Uttar Pradesh"
                }
            },
        ]
    }
}
# Describe what's possible with a type system
GraphQL is strongly typed and thw queries are based on fields and their associated data types. If there is type mismatch in a GraphQL query, server applications return clear and helpful error messages. This helps in smooth debugging and easy detection of bugs by client applications. GraphQL also provides client side libraries that can help in reducing explicit data conversion and parsing.

An example of the Student and College data types is given below:

type Query{
    students:[Student]
}

type Student{
    id: ID!
    firstName: String
    lastName: String
    fullName: String
    college: College
}

type College{
    id: ID!
    name: String
    location: String
    rating: Float
    students: [Student]
}
# Move faster with powerful developer tools
GraphQL provides rich developer tools for documentation and testing queries. GraphiQL is an excellent tool which generates documentation of the query and its schema. It also gives a query editor to test GraphQL APIs and intelligent code completion capability while building queries.

# npm start
# http://localhost:8000/graphiql
  Set port: const port = process.env.PORT || 8000;
  File: server.js

# GraphQL - Architecture
GraphQL is a specification that describes the behaviour of a GraphQL server. It is a set of guideline on how requests and responses should be handled like supported protocols, format of the data that can be accepted by the server, format of the response returned by the serverm etc. The request made by a client to the GraphQL server is called a Query. Another important concept of GraphQL is its transport layer agnostics. It can be used with any available network protocol like TCP, websocket or any other transport layer protocol. It is also neutral to databases, so you can use it with relational or NoSQL databases.

Transport layer
The transport layer provides a total end-to-end solution for reliable communications. TCP/IP relies on the transport layer to effectively control communications between two hosts. When an IP communication session must begin or end, the transport layer is used to build this connection. The transport layer is the layer at which TCP/IP ports listen. For instance, the standard port which HTTP listens on is TCP Port 80, although HTTP could really run on any TCP port; this is the standard. Again, there is no difference between TCP port 80, 1000, or 50000; any protocol can run it. Standardized port numbers are used to help ease the need to negotiate the port number for well known applications. 
Link1: https://www.sciencedirect.com/topics/computer-science/transport-layer#:~:text=The%20transport%20layer%20provides%20a,used%20to%20build%20this%20connection.
Link2: https://www.javatpoint.com/computer-network-transport-layer


GraphQL Server can be deployed by using any of the three methods listed below:
    * GraphQL server with connected database
    * GraphQL server that integrates existing systems
    * Hybrid approach

# GraphQL Server with Connected Database
This architecture has a GraphQL Server with an integrated database and can often be used with new projects. On the receipt of a Query, the server reads the request payload and fetches data from the database. This is called resolving the query. The response returned to the client adheres to the format specified in the official GraphQL specification.

Phone
              =============={Query}===========>
 &&                                               GraphQL + Database
              <=============HTTP POST==========
desktop

In the above diagram, GraphQL server and the databse are integrated on a single node. The client (deskto/mobile) communicates with GraphQL server over HTTP. The server processes the requests, fetches data from the database and returns it to the client.

# GraphQL Server Integrating Existing Systems
This approach is helpful for companies which have legacy infrastructure and different APIs. GraphQL can be used to unify microservices, legacy infrastructure and third-party APIs in the existing system.


Phone                                                  Legacy system + DB
              ======={Query}========>                 /
 &&                                   GraphQL Server /________ Microservice + DB
              <=======HTTP POST======                \
desktop                                               \
                                                        RESTful API + DB

In the above diagram, a GraphQL API acts as an interface between the client and the existing systems. Client applications communicate with the GraphQL server which in turn resolves the query.

# Hybrid Approach
Finally, we can combine the above two approaches and build a GraphQL server. In this architecture, the GraphQL server will resolve any request that is received. It will either retriece data from connected database or from the integrated APIs. This is represented in the below figure:

Phone                                                       Legacy system + DB
              ======={Query}========>                      /
 &&                                   GraphQL Server + DB /________ Microservice + DB
              <=======HTTP POST======                     \
desktop                                                    \
                                                             RESTful API + DB