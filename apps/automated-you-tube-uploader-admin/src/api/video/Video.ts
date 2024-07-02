import { JsonValue } from "type-fest";

export type Video = {
  createdAt: Date;
  description: string | null;
  filePath: JsonValue;
  id: string;
  scheduledTime: Date | null;
  schedules: JsonValue;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
