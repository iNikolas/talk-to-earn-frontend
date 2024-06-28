import { Paginate, Player } from "@/entities";
import { fetchWithError } from "@/utils";

import { routes } from "./config";
import { PaginationDto, PlayerApiResponse } from "./types";
import { playerFromApiResponseFactory } from "./utils";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

if (!apiUrl) {
  throw new Error(
    "NEXT_PUBLIC_API_URL must be defined as environment variable",
  );
}

export async function fetchPlayerInfo(
  telegramId: string,
): Promise<Omit<Player, "photoUrl">> {
  const player = await fetchWithError<PlayerApiResponse>(
    `${apiUrl}${routes.player.base}/${telegramId}`,
    { method: "GET" },
  );
  return playerFromApiResponseFactory(player);
}

export async function fetchAllPlayers(
  data: PaginationDto,
): Promise<Paginate<Omit<Player, "photoUrl">>> {
  const queryParams = new URLSearchParams();
  if (data.page) queryParams.append("page", data.page.toString());
  if (data.limit) queryParams.append("limit", data.limit.toString());

  const url = `${apiUrl}${routes.player.base}/?${queryParams.toString()}`;

  const response = await fetchWithError<Paginate<PlayerApiResponse>>(url, {
    method: "GET",
  });
  return { ...response, data: response.data.map(playerFromApiResponseFactory) };
}
