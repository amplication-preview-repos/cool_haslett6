import { InputJsonValue } from "../../types";
import { ScheduleCreateNestedManyWithoutVideosInput } from "./ScheduleCreateNestedManyWithoutVideosInput";

export type VideoCreateInput = {
  description?: string | null;
  filePath?: InputJsonValue;
  scheduledTime?: Date | null;
  schedules?: ScheduleCreateNestedManyWithoutVideosInput;
  status?: "Option1" | null;
  title?: string | null;
  userId?: string | null;
};
