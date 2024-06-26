import { createEffect } from "effector";
import { fetchPlayerInfo } from "@/api";
import { Player, TelegramPlayerInfo } from "@/entities";

export const fetchPlayerInfoFx = createEffect(
  async ({ telegramId, photoUrl }: TelegramPlayerInfo): Promise<Player> => {
    const result = await fetchPlayerInfo(telegramId);

    return { ...result, photoUrl };
  },
);
