export interface TelegramPlayerInfo {
  telegramId: number;
  photoUrl: string;
}

export interface Player extends TelegramPlayerInfo {
  playerId: number;
  name: string;
  coins: number;
  character: Character;
}

export interface Character {
  characterId: number;
}
