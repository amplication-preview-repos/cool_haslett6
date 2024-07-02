import { InputJsonValue } from "../../types";
import { VideoCreateNestedManyWithoutUsersInput } from "./VideoCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  videos?: VideoCreateNestedManyWithoutUsersInput;
};
