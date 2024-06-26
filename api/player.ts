import { Player } from "@/entities";
import { fetchWithError } from "@/utils";

import { routes } from "./config";
import { PlayerApiResponse } from "./types";
import { playerFromApiResponseFactory } from "./utils";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

if (!apiUrl) {
  throw new Error("API_URL must be defined as environment variable");
}

export async function fetchPlayerInfo(
  telegramId: number,
): Promise<Omit<Player, "photoUrl">> {
  const player = await fetchWithError<PlayerApiResponse>(
    `${apiUrl}${routes.player}/${telegramId}`,
    { method: "GET" },
  );
  return playerFromApiResponseFactory(player);
}
