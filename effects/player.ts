import { createEffect } from "effector";
import { fetchAllPlayers, fetchPlayerInfo } from "@/api";
import {
  Paginate,
  PaginationData,
  Player,
  TelegramPlayerInfo,
} from "@/entities";

export const fetchPlayerInfoFx = createEffect(
  async ({ telegramId, photoUrl }: TelegramPlayerInfo): Promise<Player> => {
    const result = await fetchPlayerInfo(telegramId);

    return { ...result, photoUrl };
  },
);

export const fetchAllPlayersFx = createEffect(
  async (data: PaginationData): Promise<Paginate<Omit<Player, "photoUrl">>> => {
    const response = await fetchAllPlayers(data);
    return response;
  },
);
