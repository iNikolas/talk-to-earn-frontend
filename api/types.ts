export interface CharacterApiResponse {
  character_id: string;
  telegram_id: number;
}

export interface PlayerApiResponse {
  user_id: string;
  telegram_id: number;
  name: string;
  registration_date: string;
  role: string;
  coins: number;
  referred_by_telegram_id: number;
  referrals: number[];
  character: CharacterApiResponse;
}
