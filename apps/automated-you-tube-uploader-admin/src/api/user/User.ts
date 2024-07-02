import { JsonValue } from "type-fest";
import { Video } from "../video/Video";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  videos?: Array<Video>;
};
