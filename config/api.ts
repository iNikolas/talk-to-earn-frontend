export const endpoints = { login: "/auth/login" } as const;

export const apiUrl = process.env.NEXT_PUBLIC_API_URL;

if (!apiUrl) {
  throw new Error("Api URL must be defined as environment variable");
}

export const apiEndpoints = {
  login: `${apiUrl}/auth/login`,
  currentUser: `${apiUrl}/auth/me`,
  refresh: `${apiUrl}/auth/refresh`,
} as const;
