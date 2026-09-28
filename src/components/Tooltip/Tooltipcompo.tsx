import React, { useState } from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const tooltipVariants = cva(
  "absolute z-50 rounded-md bg-black px-3 py-2 text-sm text-white whitespace-nowrap",
  {
    variants: {
      position: {
        top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
        bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
        left: "right-full top-1/2 mr-2 -translate-y-1/2",
        right: "left-full top-1/2 ml-2 -translate-y-1/2",
      },
      varient : {
         primary : "bg-green-700 text-white ",
         dark : "bg-black text-white",
         success : "bg-blue-700 text-white",
         destructive : "bg-red-700 text-white",
      },
       size : {
        default: "px-9 py-3 text-base",
        sm: "px-4 py-2 text-sm",
        lg: "px-14 py-4 text-lg font-bold",
        xl: "px-16 py-4 text-xl",
        icon: "w-12 h-12",
        full: "w-full h-12",
        auto: "w-auto h-auto",
       }
    },

    defaultVariants: {
      position: "top", varient : "primary", size : "default",
    },
  }
);

interface TooltipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tooltipVariants> {
  text: string;
  children: React.ReactNode;
}

const Tooltipcompo = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ text, children, position, varient, size, className, ...props }, ref) => {
    const [show, setShow] = useState(false);

    return (
      <div
        ref={ref}
        className="relative inline-block"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        {...props}
      >
        {children}

        {show && (
          <div className={cn(tooltipVariants({ varient, size, position, className }))}>
            {text}
          </div>
        )}
      </div>
    );
  }
);

Tooltipcompo.displayName = "Tooltip";

export { Tooltipcompo, tooltipVariants };