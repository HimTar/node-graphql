import { genSalt, hash, compareSync } from "bcrypt";

/**
 * Function to encrypt message
 * @param message
 * @returns {Promise<string>}
 */
const encrypt = async (message: string): Promise<string> => {
  const salt = await genSalt(10);
  const encryptedMessage = await hash(message, salt);

  return encryptedMessage;
};

/**
 * Compare message with an encrypted message
 * @param message
 * @param cipherText
 * @returns {Promise<boolean>}
 */
const compare = async (
  message: string,
  cipherText: string
): Promise<boolean> => {
  const result = compareSync(message, cipherText);

  return result;
};

export { encrypt, compare };
