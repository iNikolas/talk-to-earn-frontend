import React from "react";

import { calculateFirstPossibleIndex } from "./helpers";
import { Sort } from "../../table-rows";
import { TableProps } from "../types";

export function useSortingRow(
  skipSortForColumnIndexes: TableProps["table"]["skipSortForColumnIndexes"],
) {
  const [sortingRow, setSortingRow] = React.useState<Sort>({
    index: calculateFirstPossibleIndex(skipSortForColumnIndexes),
    asc: true,
  });
  const [sortedCount, setSortedCount] = React.useState(0);

  return {
    isActive: (index: number) => index === sortingRow.index,
    isDesc: (index: number) => index === sortingRow.index && !sortingRow.asc,
    events: (index: number) => ({
      onClick: () => {
        setSortedCount((prev) => prev + 1);
        setSortingRow((prev) => {
          if (prev.index === index) {
            return { ...prev, asc: !prev.asc };
          }

          return { index, asc: true };
        });
      },
    }),
    forceRerenderKey: String(sortedCount),
    sortingRow,
  };
}
