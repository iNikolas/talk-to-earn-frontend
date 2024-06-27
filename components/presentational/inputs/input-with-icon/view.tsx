import React from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

import { cn } from "@/utils";

import { InputWithIconProps } from "./types";

export function InputWithIcon({
  className,
  id,
  Icon,
  error = "",
  type,
  children,
  ...inputProps
}: InputWithIconProps) {
  const [showPasssword, setShowPassword] = React.useState(false);
  const reactId = React.useId();

  const isPassword = type === "password";
  return (
    <div className={className}>
      <label
        htmlFor={id ?? reactId}
        className={cn(
          "input flex items-center gap-2",
          !!error && "input-error",
        )}
      >
        {Icon && <Icon className="w-4 h-4 opacity-70" />}
        <input
          type={isPassword && showPasssword ? "text" : type}
          id={id ?? reactId}
          className="grow max-sm:w-36"
          {...inputProps}
        />
        {isPassword &&
          (showPasssword ? (
            <IoMdEyeOff
              className="cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <IoMdEye
              className="cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          ))}
        {children}
      </label>
      {!!error && (
        <div className="label p-0 pt-1">
          <span className="label-text-alt text-error">{error}</span>
        </div>
      )}
    </div>
  );
}
