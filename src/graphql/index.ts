import { ApolloServer } from "apollo-server-express";
import { Application } from "express";

import { typeDefs } from "./type_defs";
import { generateResolvers } from "./resolvers";

const gqlLoader = async (
  app: Application,
  models: { [key: string]: any }
): Promise<string> => {
  const resolvers = generateResolvers(models);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });

  const gqlServer = new ApolloServer({ typeDefs, resolvers });

  await gqlServer.start();

  gqlServer.applyMiddleware({ app });

  return gqlServer.graphqlPath;
};

export { gqlLoader };
