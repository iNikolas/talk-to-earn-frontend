/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { cn } from "@/utils";

interface BurgerProps
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

export function Burger({ className, ...props }: BurgerProps) {
  return (
    <div className="flex items-center">
      <label
        className={cn("btn btn-circle lg:hidden drawer-button", className)}
        {...props}
      >
        <GiHamburgerMenu />
      </label>
    </div>
  );
}
