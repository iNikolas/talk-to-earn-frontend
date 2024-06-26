import React from "react";
import { cn } from "@/utils";

interface LoaderProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

export function Loader({ className, ...props }: LoaderProps) {
  return (
    <section className="h-full flex justify-center items-center text-primary">
      <span
        className={cn("loading loading-bars loading-lg", className)}
        {...props}
      />
    </section>
  );
}
