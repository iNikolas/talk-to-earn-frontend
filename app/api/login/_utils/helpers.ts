export function parseMaxAgeSec(expiresInDays: string) {
  return parseInt(expiresInDays, 10) * 24 * 60 * 60;
}
