import { sign, verify } from "jsonwebtoken";
import config from "../config/config";

/**
 * Function To generate token
 * @param payload
 * @returns {string}
 */
const generateToken = (payload: { [key: string]: any }): string => {
  const token = sign(payload, config.secret);

  return token;
};

/**
 * Function to validate token
 * @param token
 * @returns {object | boolean}
 */
const validateToken = (token: string): { [key: string]: any } | boolean => {
  try {
    const user = verify(token, config.secret) as string;

    return JSON.parse(user);
  } catch {
    return false;
  }
};

export { generateToken, validateToken };
