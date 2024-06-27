/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import { cn } from "@/utils";

import { Navbar } from "../../navbar";

interface DrawerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  drawerId: string;
}

export function Drawer({ className, drawerId, children }: DrawerProps) {
  return (
    <div className={cn("drawer", className)}>
      <input id={drawerId} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side z-10">
        <label
          htmlFor={drawerId}
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <Navbar />
      </div>
    </div>
  );
}
