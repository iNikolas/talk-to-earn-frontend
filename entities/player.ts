export interface TelegramPlayerInfo {
  telegramId: string;
  photoUrl: string;
}

export interface Player extends TelegramPlayerInfo {
  playerId: string;
  name: string;
  coins: number;
  character: Character;
  registrationDate: string;
}

export interface Character {
  characterId: string;
}
