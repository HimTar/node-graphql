export default {
  port: 4000,
  secret: process.env.SECRET ?? "",
  db: {
    connectionString: process.env.MONGO_URL ?? "",
    database: process.env.DATABASE ?? "",
  },
};
