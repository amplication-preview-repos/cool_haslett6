import { Video } from "../video/Video";

export type Schedule = {
  createdAt: Date;
  id: string;
  scheduledTime: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
  video?: Video | null;
};
