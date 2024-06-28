import { jwtDecode } from "jwt-decode";
import { NextRequest, NextResponse } from "next/server";

import { UserResponse } from "@/api";
import {
  apiEndpoints,
  authCookies,
  authRoutes,
  links,
  protectedRoutes,
  refreshTokenCookieKey,
  roles,
} from "@/config";
import { fetchWithError } from "@/utils";

const MILLISECONDS = 1000;

function logout(request: NextRequest) {
  const response = NextResponse.redirect(new URL(links.login, request.url));

  authCookies.forEach((name) => response.cookies.delete(name));

  return response;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const refreshToken = request.cookies.get(refreshTokenCookieKey);

  const isAdminPage = pathname === links.admin;
  const isNotAuthorizedRoute = pathname.startsWith(links.notAuthorized);
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );
  const isGameRoute = pathname === links.home;

  if (
    (!refreshToken && isNotAuthorizedRoute) ||
    (refreshToken && (isAuthRoute || isGameRoute || isAdminPage))
  ) {
    return NextResponse.redirect(new URL(links.dashboard, request.url));
  }

  if (!refreshToken) {
    return isProtectedRoute || isAdminPage
      ? NextResponse.redirect(new URL(links.login, request.url))
      : NextResponse.next();
  }

  const decodedToken = jwtDecode(refreshToken.value);

  const isExpired =
    !decodedToken.exp || decodedToken.exp < Date.now() / MILLISECONDS;

  if (isExpired) {
    return logout(request);
  }

  if (isAuthRoute || isNotAuthorizedRoute) {
    return NextResponse.redirect(new URL(links.dashboard, request.url));
  }

  if (isProtectedRoute) {
    try {
      const user = await fetchWithError<UserResponse>(
        apiEndpoints.currentUser,
        {
          method: "POST",
          body: JSON.stringify({ refreshToken: refreshToken.value }),
        },
      );

      if (user.role !== roles.admin) {
        return NextResponse.redirect(new URL(links.notAuthorized, request.url));
      }
    } catch (err) {
      return logout(request);
    }
  }

  return NextResponse.next();
}
