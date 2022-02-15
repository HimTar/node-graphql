import express, { Request, Response, json, Application } from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const expressLoader = (): Application => {
  const app = express();

  // CORS Config
  app.use(cors());

  // BodyParse Config
  app.use(json());

  // Morgan Config
  app.use(morgan(":method :url :status :response-time ms"));

  // // Helmet Config
  app.use(
    helmet({ contentSecurityPolicy: false, crossOriginEmbedderPolicy: false })
  );

  return app;
};

export { expressLoader };
