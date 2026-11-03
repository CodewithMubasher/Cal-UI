import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";

export const buttonStyles = tv({
  base: [
    "inline-flex items-center justify-center gap-2 cursor-pointer select-none",
    "font-medium rounded-ui outline-none transition-all",
    "border-(length:--border-width) border-transparent",
    "data-[pressed]:scale-[0.97]",
    "data-[disabled]:opacity-50 data-[disabled]:pointer-events-none",
    "data-[focus-visible]:ring-2 data-[focus-visible]:ring-accent data-[focus-visible]:ring-offset-2",
  ],
  variants: {
    variant: {
      primary: "bg-accent text-accent-foreground shadow-ui data-[hovered]:brightness-110",
      secondary: "bg-surface text-foreground border-border data-[hovered]:bg-background",
      ghost: "bg-transparent text-foreground data-[hovered]:bg-border/40",
      danger: "bg-danger text-white data-[hovered]:brightness-110",
    },
    size: {
      sm: "h-[calc(var(--control-h)*0.8)] px-3 text-sm",
      md: "h-(--control-h) px-4 text-sm",
      lg: "h-[calc(var(--control-h)*1.2)] px-6 text-base",
    },
  },
  defaultVariants: { variant: "primary", size: "md" },
});

export interface ButtonProps
  extends Omit<AriaButtonProps, "className">,
    VariantProps<typeof buttonStyles> {
  className?: string;
}

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return <AriaButton {...props} className={buttonStyles({ variant, size, className })} />;
}
