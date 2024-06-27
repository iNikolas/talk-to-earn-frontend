import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { LoginResponse, loginUserWithEmailAndPassword, refresh } from "@/api";
import {
  accessTokenCookieKey,
  authCookies,
  refreshTokenCookieKey,
} from "@/config";
import { LoginCredentials } from "@/entities";
import { parseMaxAgeSec } from "./_utils";

export async function GET() {
  const refreshToken = cookies().get(refreshTokenCookieKey)?.value ?? "";

  try {
    const { access_token: accessToken, expires_in: expiresInDays } =
      await refresh(refreshToken);

    const maxAgeSeconds = parseMaxAgeSec(expiresInDays);

    cookies().set({
      name: accessTokenCookieKey,
      value: accessToken,
      maxAge: maxAgeSeconds,
      secure: true,
    });

    return NextResponse.json(
      { accessToken, maxAge: maxAgeSeconds },
      { status: 200 },
    );
  } catch (e) {
    return NextResponse.json(
      {
        message:
          e instanceof Error ? e.message : "Failed to obtain login credentials",
      },
      { status: 401 },
    );
  }
}

export async function POST(req: Request) {
  const credentials: LoginCredentials = await req.json();

  try {
    const response: LoginResponse =
      await loginUserWithEmailAndPassword(credentials);

    cookies().set({
      name: accessTokenCookieKey,
      value: response.access_token,
      maxAge: parseMaxAgeSec(response.expires_in),
      secure: true,
    });

    cookies().set({
      name: refreshTokenCookieKey,
      value: response.refresh_token,
      httpOnly: true,
      secure: true,
    });

    return NextResponse.json(response, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: e instanceof Error ? e.message : "Failed to login" },
      { status: 401 },
    );
  }
}

export async function DELETE() {
  const options = {
    value: "",
    maxAge: -1,
  };

  authCookies.forEach((name) => cookies().set({ name, ...options }));

  return NextResponse.json({}, { status: 200 });
}
