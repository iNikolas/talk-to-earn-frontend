import React from "react";
import { VscKebabVertical } from "react-icons/vsc";

import { cn } from "@/utils";

import { KebabDropdownProps } from "./types";

export function KebabDropdown({
  className,
  disabled,
  options,
  ...props
}: KebabDropdownProps) {
  return (
    <section
      className={cn("dropdown dropdown-left dropdown-end", className)}
      {...props}
    >
      <button
        disabled={disabled || !options || !options.length}
        type="button"
        className="btn btn-ghost btn-circle mih-h-0 min-w-0 max-w-min max-h-min"
      >
        <VscKebabVertical />
      </button>
      <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        {options?.map((option) => <li key={option?.toString()}>{option}</li>)}
      </ul>
    </section>
  );
}
