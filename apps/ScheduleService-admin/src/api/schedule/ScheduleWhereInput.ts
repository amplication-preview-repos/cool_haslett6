import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { VideoWhereUniqueInput } from "../video/VideoWhereUniqueInput";

export type ScheduleWhereInput = {
  id?: StringFilter;
  scheduledTime?: DateTimeNullableFilter;
  status?: "Option1";
  video?: VideoWhereUniqueInput;
};
