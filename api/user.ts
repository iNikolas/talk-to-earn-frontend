import { apiEndpoints } from "@/config";
import { User } from "@/entities";
import { fetchWithError } from "@/utils";

import { UserResponse } from "./types";
import { userFromApiResponseFactory } from "./utils";

export async function getUserProfile(token: string): Promise<User> {
  const response = await fetchWithError<UserResponse>(
    apiEndpoints.currentUser,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    },
  );

  return userFromApiResponseFactory(response);
}
