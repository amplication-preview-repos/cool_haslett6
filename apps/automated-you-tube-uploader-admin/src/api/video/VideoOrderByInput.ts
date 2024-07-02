import { SortOrder } from "../../util/SortOrder";

export type VideoOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  scheduledTime?: SortOrder;
  schedules?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
