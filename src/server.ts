// // Configuring env variables
import dotenv from "dotenv";
dotenv.config();

import { MainLoader, logger } from "./loaders";

import config from "./config/config";

const PORT = config.port;

const startServer = async () => {
  const { app, gqlPath } = await MainLoader();

  app.listen(PORT, () => {
    logger.info(`Server started at PORT : ${PORT}`);
    logger.info(`http://localhost:${PORT}${gqlPath}`);
  });
};

startServer();
