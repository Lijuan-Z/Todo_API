const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


const {JWT_SECRET } = require('./config/db');
const typeDefs = require('./schema/schema');
const resolvers = require('./resolvers/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    try {
      const user = jwt.verify(token, JWT_SECRET);
      return { user };
    } catch (error) {
      return { user: null };
    }
  }
});
server.listen({ port: 4000 });
