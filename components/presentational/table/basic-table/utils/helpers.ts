import { TableProps } from "../types";

export function calculateFirstPossibleIndex(
  skipSortForColumnIndexes: TableProps["table"]["skipSortForColumnIndexes"] = [],
  defaultIndex = 0,
): number {
  if (!skipSortForColumnIndexes.includes(defaultIndex)) {
    return defaultIndex;
  }

  return calculateFirstPossibleIndex(
    skipSortForColumnIndexes,
    defaultIndex + 1,
  );
}
