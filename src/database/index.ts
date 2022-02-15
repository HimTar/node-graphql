import { MongoClient } from "mongodb";

import User from "./models/User";

import config from "../config/config";

interface Connection {
  status: boolean;
  models: {
    [key: string]: any;
  };
}

const makeConnection = async (): Promise<Connection> => {
  try {
    const Mongo_Url = config.db.connectionString;
    const database = config.db.database;

    const client = new MongoClient(Mongo_Url);

    await client.connect();

    const db = client.db(database);

    const models = { User: new User(db) };

    return { status: true, models };
  } catch (err) {
    console.log(err);

    return { status: false, models: {} };
  }
};

export { makeConnection, User };
