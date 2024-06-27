import { links } from "./navigation";

export const refreshTokenCookieKey = "talk_to_earn_refreshToken";
export const accessTokenCookieKey = "talk_to_earn_accessToken";
export const userCookieKey = "talk_to_earn_user";

export const authCookies = [
  refreshTokenCookieKey,
  accessTokenCookieKey,
  userCookieKey,
];

export const roles = { user: "user", admin: "admin" } as const;

export const protectedRoutes = [links.admin];
export const authRoutes = [links.login, links.register];
