import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;
function Button({ children, className = "", ...rest }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "py-[18px] px-[50px] rounded-full text-base font-medium flex items-center justify-center gap-2.5",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
