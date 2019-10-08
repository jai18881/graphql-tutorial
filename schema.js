import {gql, makeExecutableSchema } from 'apollo-server-express';
import resolvers from './resolvers';

const typeDefs = gql`type Author {
    age: String
    name: String
    books: [String]
  }

  type Query {
    authors: [Author]
    author(id: String): Author
  }

  type Mutation {
    addAuthor(name: String!, age: Int!, books: [String!]): Author
    deleteAuthor(id: String!): Author
  }`;
const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema });

export default schema;
