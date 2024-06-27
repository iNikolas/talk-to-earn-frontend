import React from "react";

import { cn } from "@/utils";

import { Groups, Logo, Logout } from "./components";

interface NavbarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export function Navbar({ className, ...props }: NavbarProps) {
  return (
    <nav
      className={cn(
        "h-screen overflow-y-auto w-[280px] min-w-[280px] pt-8 pb-5 px-6 text-neutral-content flex flex-col justify-between bg-base-100",
        className,
      )}
      {...props}
    >
      <div>
        <Logo />
        <Groups />
      </div>
      <Logout />
    </nav>
  );
}
