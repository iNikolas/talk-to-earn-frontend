"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import { cn } from "@/utils";

import { TableCell } from "./components";
import { TableRowsProps } from "./types";
import { useSort } from "./utils";

export function TableRows({
  className: containerClassName,
  rows,
  sortingRow,
  collapsed,
  ...props
}: TableRowsProps) {
  const sortedData = useSort(rows, sortingRow);

  return (
    <AnimatePresence>
      {!collapsed &&
        sortedData.map(({ key, data }) => (
          <motion.tr
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={key}
            className={cn(
              "hover whitespace-nowrap max-w-min",
              containerClassName,
            )}
            {...props}
          >
            {data.map(({ index, value, className }) => (
              <TableCell
                className={cn(className)}
                key={`${key}-${index || Math.random()}`}
              >
                {value}
              </TableCell>
            ))}
          </motion.tr>
        ))}
    </AnimatePresence>
  );
}
