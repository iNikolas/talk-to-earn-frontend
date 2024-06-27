import { createEffect } from "effector";

import { LoginResponse } from "@/api";
import { nextApi } from "@/config";
import { LoginCredentials } from "@/entities";
import { fetchWithError } from "@/utils";

export const loginFx = createEffect(
  async ({ email, password }: LoginCredentials): Promise<LoginResponse> => {
    const response = await fetchWithError<LoginResponse>(nextApi.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    return response;
  },
);

export const logoutFx = createEffect(async () => {
  await fetchWithError(nextApi.login, {
    method: "DELETE",
  });
});
