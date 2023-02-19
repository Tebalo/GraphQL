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