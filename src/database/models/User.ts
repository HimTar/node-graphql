import { Collection, Db, ObjectId, WithId } from "mongodb";

import { DBRes } from "../../interfaces";

class User {
  collection: Collection;

  constructor(db: Db) {
    this.collection = db.collection("User");
  }

  getUser = async (condition = {}, filter = {}): Promise<DBRes> => {
    try {
      const data = (await this.collection.findOne(condition, filter)) as
        | WithId<Document>
        | undefined;

      return {
        status: "success",
        message: "User data fetched successfully !",
        data,
      };
    } catch (err) {
      return { status: "failed", message: "Error while querying DB !" };
    }
  };

  getUserById = async (id: string, filter = {}): Promise<DBRes> => {
    try {
      const data = (await this.collection.findOne(
        {
          _id: new ObjectId(id),
        },
        filter
      )) as WithId<Document> | undefined;

      return {
        status: "success",
        message: "User data fetched successfully !",
        data,
      };
    } catch (err) {
      return { status: "failed", message: "Error while querying DB !" };
    }
  };

  addUser = async (
    name: string,
    email: string,
    password: string
  ): Promise<DBRes> => {
    try {
      await this.collection.insertOne({ name, email, password });

      return { status: "success", message: "User saved successfully  !" };
    } catch (err) {
      return { status: "failed", message: "Error while querying DB !" };
    }
  };
}

export default User;
