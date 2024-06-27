import { createEffect } from "effector";

import { getUserProfile } from "@/api";
import { User } from "@/entities";
import { getToken } from "@/utils";

export const getUserProfileFx = createEffect(async (): Promise<User> => {
  const token = await getToken();
  const response = await getUserProfile(token);

  return response;
});
