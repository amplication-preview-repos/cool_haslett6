import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type VideoWhereInput = {
  description?: StringNullableFilter;
  filePath?: JsonFilter;
  id?: StringFilter;
  scheduledTime?: DateTimeNullableFilter;
  schedules?: JsonFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
