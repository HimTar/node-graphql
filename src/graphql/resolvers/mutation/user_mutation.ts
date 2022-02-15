import { UserInputError } from "apollo-server-core";
import { User } from "../../../database";
import { encrypt } from "../../../loaders";

import { NewUser } from "../../../interfaces";

const generateUserMutation = (User: User) => {
  const register = async (
    _: any,
    { name, email, password }: NewUser
  ): Promise<String> => {
    if (!name || !email || !password)
      throw new UserInputError("All fields are required !");

    const findUser = await User.getUser({ email: email.toLowerCase() });

    if (findUser.data) throw new UserInputError("User already exists !");

    const encryptedPass = await encrypt.encrypt(password);

    const dbRes = await User.addUser(
      name.toLowerCase(),
      email.toLowerCase(),
      encryptedPass
    );

    return dbRes.message;
  };

  const userMutation = {
    register,
  };

  return userMutation;
};

export { generateUserMutation };
