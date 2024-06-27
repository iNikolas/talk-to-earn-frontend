export interface CharacterApiResponse {
  character_id: string;
  telegram_id: string;
}

export interface PlayerApiResponse {
  user_id: string;
  telegram_id: string;
  name: string;
  registration_date: string;
  role: string;
  coins: number;
  referred_by_telegram_id: string;
  referrals: string[];
  character: CharacterApiResponse;
}
