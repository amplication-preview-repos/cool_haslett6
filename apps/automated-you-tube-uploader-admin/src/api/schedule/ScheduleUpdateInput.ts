import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type ScheduleUpdateInput = {
  scheduledTime?: Date | null;
  status?: "Option1" | null;
  video?: VideoWhereUniqueInput | null;
};
