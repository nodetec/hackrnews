import React from "react";
import { twJoin, twMerge } from "tailwind-merge";

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export enum VARIANT {
  primary = "primary",
  error = "error",
  info = "info",
  success = "success",
  warn = "warn",
  ghost = "ghost",
}

type ButtonProps = BaseButtonProps & {
  variant?:
  | VARIANT
  | "primary"
  | "error"
  | "info"
  | "success"
  | "warn"
  | "ghost";
  flat?: boolean;
};

export function Button({
  children,
  variant = VARIANT.ghost,
  flat = false,
  ...props
}: ButtonProps) {
  const { className, ...rest } = props;

  const variantStyles = {
    [VARIANT.primary]: twJoin(
      "bg-primary",
      "hover:bg-primary/90",
      "active:bg-primary/80",
      !flat && "shadow hover:shadow-lg active:shadow",
    ),
    [VARIANT.error]: twJoin(
      "bg-error",
      "hover:bg-error/90",
      "active:bg-error/80",
      !flat && "shadow hover:shadow-lg active:shadow",
    ),
    [VARIANT.info]: twJoin(
      "bg-info",
      "hover:bg-info/90",
      "active:bg-info/80",
      !flat && "shadow hover:shadow-lg active:shadow",
    ),
    [VARIANT.success]: twJoin(
      "bg-success",
      "hover:bg-success/90",
      "active:bg-success/80",
      !flat && "shadow hover:shadow-lg active:shadow",
    ),

    [VARIANT.warn]: twJoin(
      "bg-warn",
      "hover:bg-warn/90",
      "active:bg-warn/80",
      !flat && "shadow hover:shadow-lg active:shadow",
    ),
    [VARIANT.ghost]: twJoin(
      "bg-transparent text-textColor",
      "hover:bg-surface2/50",
      "active:bg-surface2",
      !flat && "shadow hover:shadow-lg active:shadow",
    ),
  };

  return (
    <button
      type="button"
      className={twMerge(
        twJoin(
          "block py-2 px-3 rounded cursor-pointer",
          "text-neutral-950 border-black/5",
          !flat && "border",
          "uppercase text-sm font-semibold",
          "transition ease-out",
          "inline-flex justify-center items-center gap-2",
        ),
        variantStyles[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

type RoundButtonProps = ButtonProps & {
  flat?: boolean;
};

export function RoundButton({
  children,
  variant = VARIANT.ghost,
  flat = false,
  ...props
}: RoundButtonProps) {
  const { className, ...rest } = props;
  return (
    <Button
      variant={variant}
      flat={flat}
      className={twMerge("rounded-full w-fit p-2", className)}
      {...rest}
    >
      {children}
    </Button>
  );
}

export function OutlineButton({
  children,
  variant = VARIANT.ghost,
  flat = false,
  ...props
}: ButtonProps) {
  const { className, ...rest } = props;
  const borderColor =
    variant === "ghost"
      ? "2px solid darkgray"
      : `2px solid rgb(var(--color-${variant}))`;
  const color =
    variant === "ghost"
      ? "rgb(var(--discreet-text))"
      : `rgb(var(--color-${variant}))`;
  const hoverBgStyles = {
    primary: twJoin("active:bg-primary/30", "hover:bg-primary/10"),
    error: twJoin("active:bg-error/30", "hover:bg-error/10"),
    info: twJoin("active:bg-info/30", "hover:bg-info/10"),
    success: twJoin("active:bg-success/30", "hover:bg-success/10"),
    warn: twJoin("active:bg-warn/30", "hover:bg-warn/10"),
    ghost: twJoin("active:bg-surface3/30", "hover:bg-surface3/10"),
  };

  return (
    <Button
      variant={variant}
      flat={flat}
      className={twMerge("bg-transparent", hoverBgStyles[variant], className)}
      style={{
        border: borderColor,
        color: color,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}
