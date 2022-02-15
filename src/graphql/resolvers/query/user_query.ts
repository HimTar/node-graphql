import { UserInputError } from "apollo-server-core";
import { WithId, Document } from "mongodb";
import { User } from "../../../database";
import { encrypt, jwt } from "../../../loaders";

import { LoginUser } from "../../../interfaces";

const generateUserQuery = (User: User) => {
  // Login Resolver

  const login = async (
    _: any,
    { username, password }: { username: string; password: string }
  ): Promise<LoginUser> => {
    if (!username || !password)
      throw new UserInputError("Username and password are required !");

    const { status, data } = await User.getUser({
      email: username.toLowerCase(),
    });

    if (status !== "success")
      throw new UserInputError("Error querying database !");

    if (!data) throw new UserInputError("User does not exists !");

    if (!encrypt.compare(password, data.password)) {
      throw new UserInputError("Invalid credentials !");
    }

    const token = jwt.generateToken({
      id: data._id,
      email: data.email,
      name: data.name,
    });

    const user: LoginUser = {
      token,
      email: data.email,
      name: data.name,
    };

    return user;
  };

  // Resolver to fetch user information
  const getUser = async (
    _: any,
    { id }: { id: string }
  ): Promise<WithId<Document> | undefined> => {
    const userData = await User.getUser(id);

    return userData.data;
  };

  const userQuery = {
    getUser,
    login,
  };

  return userQuery;
};

export { generateUserQuery };
