import { apiEndpoints } from "@/config";
import { LoginCredentials } from "@/entities";
import { fetchWithError } from "@/utils";

import { LoginResponse, Tokens } from "./types";

export async function loginUserWithEmailAndPassword({
  email,
  password,
}: LoginCredentials): Promise<LoginResponse> {
  const response = await fetchWithError<LoginResponse>(apiEndpoints.login, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  return response;
}

export async function refresh(refreshToken: string): Promise<Tokens> {
  const response: Tokens = await fetchWithError(apiEndpoints.refresh, {
    method: "POST",
    body: JSON.stringify({ refreshToken }),
  });

  return response;
}
