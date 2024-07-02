import { JsonValue } from "type-fest";
import { Schedule } from "../schedule/Schedule";
import { User } from "../user/User";

export type Video = {
  createdAt: Date;
  description: string | null;
  filePath: JsonValue;
  id: string;
  scheduledTime: Date | null;
  schedules?: Array<Schedule>;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
