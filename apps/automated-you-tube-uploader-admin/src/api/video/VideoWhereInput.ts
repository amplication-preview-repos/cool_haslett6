import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ScheduleListRelationFilter } from "../schedule/ScheduleListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VideoWhereInput = {
  description?: StringNullableFilter;
  filePath?: JsonFilter;
  id?: StringFilter;
  scheduledTime?: DateTimeNullableFilter;
  schedules?: ScheduleListRelationFilter;
  status?: "Option1";
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
