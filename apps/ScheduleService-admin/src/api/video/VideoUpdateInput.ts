import { InputJsonValue } from "../../types";
import { ScheduleUpdateManyWithoutVideosInput } from "./ScheduleUpdateManyWithoutVideosInput";

export type VideoUpdateInput = {
  description?: string | null;
  filePath?: InputJsonValue;
  scheduledTime?: Date | null;
  schedules?: ScheduleUpdateManyWithoutVideosInput;
  status?: "Option1" | null;
  title?: string | null;
  userId?: string | null;
};
