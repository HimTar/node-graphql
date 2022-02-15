import { generateQuery } from "./query";
import { generateMutations } from "./mutation";

const generateResolvers = (models: { [key: string]: any }) => {
  const Mutation = generateMutations(models);
  const Query = generateQuery(models);

  const resolvers = {
    Query,
    Mutation,
  };

  return resolvers;
};

export { generateResolvers };
