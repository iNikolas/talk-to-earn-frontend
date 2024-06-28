import React from "react";
import { maxCellChars } from "@/config";

interface TableCellProps
  extends React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  > {}

export function TableCell({
  className,
  children: value,
  ...props
}: TableCellProps) {
  const isOverflow = typeof value === "string" && value.length > maxCellChars;
  return (
    <td className={className} {...props}>
      {isOverflow ? (
        <div
          className="tooltip tooltip-info before:max-w-64 before:whitespace-normal"
          data-tip={value}
        >
          {`${value.slice(0, maxCellChars)}...`}
        </div>
      ) : (
        value
      )}
    </td>
  );
}
