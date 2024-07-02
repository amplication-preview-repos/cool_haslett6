import { InputJsonValue } from "../../types";
import { VideoUpdateManyWithoutUsersInput } from "./VideoUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  videos?: VideoUpdateManyWithoutUsersInput;
};
