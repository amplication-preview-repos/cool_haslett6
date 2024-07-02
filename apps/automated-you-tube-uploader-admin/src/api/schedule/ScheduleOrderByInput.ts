import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  scheduledTime?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  videoId?: SortOrder;
};
