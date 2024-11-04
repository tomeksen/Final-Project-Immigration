import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md px-2.5 py-1 text-xs font-thin transition-colors w-[90px]",
  {
    variants: {
      variant: {
        default: "bg-secondary-green/20 text-secondary-green",
        secondary: "bg-secondary-blue/20 text-secondary-blue",
        destructive: "bg-primary-red/20 text-primary-red",
        outline: "bg-secondary-gray/20 text-secondary-dark-gray",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
