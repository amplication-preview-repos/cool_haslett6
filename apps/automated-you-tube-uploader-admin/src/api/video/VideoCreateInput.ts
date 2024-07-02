import { InputJsonValue } from "../../types";
import { ScheduleCreateNestedManyWithoutVideosInput } from "./ScheduleCreateNestedManyWithoutVideosInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoCreateInput = {
  description?: string | null;
  filePath?: InputJsonValue;
  scheduledTime?: Date | null;
  schedules?: ScheduleCreateNestedManyWithoutVideosInput;
  status?: "Option1" | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
