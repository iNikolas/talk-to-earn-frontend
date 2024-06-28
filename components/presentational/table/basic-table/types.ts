import React from "react";
import { TableRow } from "../table-rows";

export interface TableProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  container?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >;
  table: React.DetailedHTMLProps<
    React.TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > & {
    head: string[];
    body: TableRow[];
    SortColumnIcon?: React.FC<React.SVGProps<SVGElement>>;
    skipSortForColumnIndexes?: number[];
  };
}
