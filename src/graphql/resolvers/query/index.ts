import { generateUserQuery } from "./user_query";

const generateQuery = (models: { [key: string]: any }) => {
  const Query = {
    ...generateUserQuery(models.User),
  };

  return Query;
};

export { generateQuery };
