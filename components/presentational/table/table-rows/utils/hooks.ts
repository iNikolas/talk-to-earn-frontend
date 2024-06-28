"use client";

import { Sort, TableRow } from "../types";

export function useSort(data: TableRow[], sortingRow?: Sort) {
  if (!sortingRow) {
    return data;
  }

  return [...data].sort((a, b) => {
    const sortIndex = sortingRow.index;
    const aIndex = a.data[sortIndex].index;
    const bIndex = b.data[sortIndex].index;

    if (typeof aIndex === "number" && typeof bIndex === "number") {
      return !sortingRow.asc ? aIndex - bIndex : bIndex - aIndex;
    }

    return sortingRow.asc
      ? String(aIndex).localeCompare(String(bIndex))
      : String(bIndex).localeCompare(String(aIndex));
  });
}
