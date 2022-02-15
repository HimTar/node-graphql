import { WithId, Document } from "mongodb";

interface DBRes {
  status: string;
  message: string;
  data?: WithId<Document> | undefined;
}

export { DBRes };
