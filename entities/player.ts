export interface TelegramPlayerInfo {
  telegramId: number;
  photoUrl: string;
}

export interface Player extends TelegramPlayerInfo {
  playerId: string;
  name: string;
  coins: number;
  character: Character;
}

export interface Character {
  characterId: string;
}
