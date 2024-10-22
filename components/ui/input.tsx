import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md  bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground border border-input focus-visible:outline-none focus-visible:border-1 focus-visible:border-accent  disabled:cursor-not-allowed disabled:opacity-50  transition-colors duration-75",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
