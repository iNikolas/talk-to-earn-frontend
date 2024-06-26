import { Player } from "@/entities";
import { PlayerApiResponse } from "../types";

export function playerFromApiResponseFactory(
  data: PlayerApiResponse,
): Omit<Player, "photoUrl"> {
  return {
    playerId: data.user_id,
    telegramId: data.telegram_id,
    name: data.name,
    coins: data.coins,
    character: {
      characterId: data.character.character_id,
    },
  };
}
