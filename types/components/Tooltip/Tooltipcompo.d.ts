import React from "react";
import type { VariantProps } from "class-variance-authority";
declare const tooltipVariants: (props?: ({
    position?: "bottom" | "left" | "right" | "top" | null | undefined;
    varient?: "dark" | "primary" | "destructive" | "success" | null | undefined;
    size?: "auto" | "default" | "sm" | "lg" | "xl" | "icon" | "full" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
interface TooltipProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tooltipVariants> {
    text: string;
    children: React.ReactNode;
}
declare const Tooltipcompo: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLDivElement>>;
export { Tooltipcompo, tooltipVariants };
//# sourceMappingURL=Tooltipcompo.d.ts.map