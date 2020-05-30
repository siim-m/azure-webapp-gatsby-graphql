const { ApolloServer, gql } = require('apollo-server-azure-functions');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => `Random hello #${Math.floor(Math.random() * 100)} from Azure Functions!`,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

exports.graphqlHandler = server.createHandler();
