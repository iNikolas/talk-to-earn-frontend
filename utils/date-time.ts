import { format } from "date-fns";

export function formatDate(
  date: Date | string,
  formatString = "dd/MM/yyyy HH:mm:ss",
) {
  return format(date, formatString);
}
