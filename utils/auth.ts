import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import { accessTokenCookieKey, nextApi } from "@/config";

import { fetchWithError } from "./helpers";

export async function getToken(): Promise<string> {
  const accessToken = Cookies.get(accessTokenCookieKey) ?? "";
  try {
    const decodedToken = jwtDecode(accessToken);

    const isExpired = !decodedToken.exp || decodedToken.exp < Date.now() / 1000;

    if (isExpired) {
      throw new Error("Token is expired");
    }

    return accessToken;
  } catch (e) {
    const response: { accessToken: string; maxAge: number } =
      await fetchWithError(nextApi.login, { method: "GET" });

    return response.accessToken;
  }
}
