import { Application } from "express";

import { expressLoader } from "./express";
import { createLogger } from "./logger";

import * as encrypt from "./encrypt";
import * as jwt from "./jwt";

import { makeConnection } from "../database/index";
import { gqlLoader } from "../graphql";

const logger = createLogger();

interface LoaderRes {
  app: Application;
  gqlPath: string;
}

/** Loads the application and other modules
 * @returns {Promise<Application>}
 */
const MainLoader = async (): Promise<LoaderRes> => {
  // Loading express app
  const app = expressLoader();

  logger.info("Express Loaded successfully !");

  // DB connection
  const dbConnection = await makeConnection();

  if (!dbConnection.status) {
    logger.error("Error connecting with database !");

    return { app, gqlPath: "no-path" };
  } else logger.info("Database connected successfully !");

  // Configure GraphQl
  const gqlPath = await gqlLoader(app, dbConnection.models);

  logger.info("GraphQl configured successfully !");

  return { app, gqlPath };
};

export { MainLoader, logger, encrypt, jwt };
