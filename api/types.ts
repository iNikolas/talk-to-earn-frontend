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

export interface UserResponse {
  user_id: string;
  first_name: string;
  last_name: string;
  registration_date: string;
  email: string;
  role: string;
}

export interface Tokens {
  access_token: string;
  refresh_token: string;
  expires_in: string;
}

export interface LoginResponse extends Tokens {
  data: UserResponse;
}
