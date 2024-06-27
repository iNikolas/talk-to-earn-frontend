import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { TelegramPlayerInfo } from "@/entities";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchWithError<T>(
  url: string,
  { body, headers, ...options }: RequestInit,
): Promise<T> {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json", ...headers },
    body,
    ...options,
  });
  if (!response.ok) {
    const { status } = response;
    const data = await response.json();

    throw new Error(data.message ?? `Status ${status}: Failed to fetch`);
  }

  const data = await response.json();

  return data;
}

export function mockTelegramDataFactory(): TelegramPlayerInfo | null {
  const mockTelegramId = process.env.NEXT_PUBLIC_MOCK_TELEGRAM_ID;

  if (!mockTelegramId) {
    return null;
  }

  return {
    photoUrl: "",
    telegramId: mockTelegramId,
  };
}
