import { Player, User } from "@/entities";
import { PlayerApiResponse, UserResponse } from "../types";

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

export function userFromApiResponseFactory(data: UserResponse): User {
  return {
    id: data.user_id,
    email: data.email,
    lastname: data.last_name,
    firstname: data.first_name,
    registrationDate: data.registration_date,
  };
}
