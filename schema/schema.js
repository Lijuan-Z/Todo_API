const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  createdAt: String!
  updatedAt: String!
}

type AuthData {
  user: User!
  token: String!
}


type Todo {
  id: ID!
  description: String!
  category: String!
  owner: String!
  createdAt: String!
  updatedAt: String!
}
input RegisterInput {
  name: String!
  email: String!
  password: String!
}

input CreateTodoInput {
  description: String!
  category: String!
  owner: String!
}

input UpdateTodoInput {
  description: String
  category: String
  owner: String!
}

type Query {
  todos: [Todo!]!
  todoByCategory(category: String!): [Todo!]!
  todoByOwner(owner: String!): [Todo!]!
}

type Mutation {
  register(input: RegisterInput!): AuthData!
  login(email: String!, password: String!): AuthData!
  createTodo(input: CreateTodoInput!): Todo!
  updateTodo(id: ID!, input: UpdateTodoInput!): Todo!
  deleteTodo(id: ID!, username: String): Todo!
}
`;

module.exports = typeDefs;
