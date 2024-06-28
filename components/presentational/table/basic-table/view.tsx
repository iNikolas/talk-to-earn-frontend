"use client";

import React from "react";

import { IoMdArrowDown } from "react-icons/io";
import { cn } from "@/utils";

import { TableProps } from "./types";
import { useSortingRow } from "./utils";
import { TableRows } from "../table-rows";

export function Table({ container = {}, children, table }: TableProps) {
  const { className: containerClassName, ...containerProps } = container;
  const {
    className: tableClassName,
    head,
    body,
    SortColumnIcon,
    skipSortForColumnIndexes,
    ...tableProps
  } = table;

  const { events, isActive, isDesc, forceRerenderKey, sortingRow } =
    useSortingRow(skipSortForColumnIndexes);

  return (
    <section
      className={cn("overflow-x-auto", containerClassName)}
      {...containerProps}
    >
      <table
        className={cn(
          "table table-lg table-pin-rows table-pin-cols",
          tableClassName,
        )}
        {...tableProps}
      >
        <thead>
          <tr>
            {head.map((cellName, index) => (
              <td key={cellName}>
                <button
                  type="button"
                  className="flex gap-4 items-center"
                  {...(!skipSortForColumnIndexes?.includes(index) &&
                    events(index))}
                >
                  {cellName}
                  {!skipSortForColumnIndexes?.includes(index) && (
                    <span
                      className={cn(
                        isActive(index) &&
                          "[&_path]:stroke-primary [&_path]:stroke-[3px]",
                        isDesc(index) && "rotate-180",
                      )}
                    >
                      {SortColumnIcon ? <SortColumnIcon /> : <IoMdArrowDown />}
                    </span>
                  )}
                </button>
              </td>
            ))}
          </tr>
        </thead>
        <tbody key={forceRerenderKey}>
          {React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child as React.ReactElement, { sortingRow })
              : child,
          )}
          <TableRows rows={body} sortingRow={sortingRow} />
        </tbody>
      </table>
    </section>
  );
}
