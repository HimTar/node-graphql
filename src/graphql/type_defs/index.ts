import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String
  }

  type LoginUser {
    token: String!
    email: String!
    name: String!
  }

  type Query {
    login(username: String!, password: String!): LoginUser!
    getUser(id: String!): User!
  }

  type Mutation {
    register(name: String!, email: String!, password: String!): String!
  }
`;

export { typeDefs };
