import { HTMLMotionProps } from "framer-motion";

export interface Sort {
  index: number;
  asc: boolean;
}

export interface TableCell {
  index: string | number;
  value: React.ReactNode | string;
  className?: string;
}

export interface TableRow {
  key: string;
  data: TableCell[];
}

export interface TableRowsProps extends HTMLMotionProps<"tr"> {
  rows: TableRow[];
  sortingRow?: Sort;
  collapsed?: boolean;
}
