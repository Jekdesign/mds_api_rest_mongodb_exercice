const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Todo {
        id: ID!
        name: String!
        status: String!
    }
    
    type Query {
        getTodo(id: ID!): Todo
        getAllTodo: Todo
    }
    
    input TodoInput {
        name: String!
        status: String!
    }
    
    type Mutation {
        createTodo(input: TodoInput): Todo
        updateTodo(id: ID!, input: TodoInput): Todo
        deleteTodo(id: ID!): Todo
    }
    schema {
        query: Query,
        mutation: Mutation
    }
`);