import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type ScheduleCreateInput = {
  scheduledTime?: Date | null;
  status?: "Option1" | null;
  video?: VideoWhereUniqueInput | null;
};
