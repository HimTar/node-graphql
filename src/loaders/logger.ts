import winston from "winston";

/**
 * Function to create a custom logger instance
 * @returns {Object}
 */
const createLogger = () => {
  const logger = winston.createLogger({
    transports: [new winston.transports.Console()],
  });

  const info = (message: string) => {
    logger.info(message);
  };

  const warning = (message: string) => {
    logger.warning(message);
  };

  const error = (message: string) => {
    logger.error(message);
  };

  return Object.freeze({ info, warning, error });
};

export { createLogger };
