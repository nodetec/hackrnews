/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of Hackr News.
 *
 * Hackr News is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Hackr News is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Hackr News. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * chris.machine@pm.me
 */

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
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { children, variant = VARIANT.ghost, ...props }: ButtonProps,
    ref,
  ) {
    const { className, ...rest } = props;

    const variantStyles = {
      [VARIANT.primary]: twJoin(
        "bg-primary",
        "hover:bg-primary/90",
        "active:bg-primary/80",
      ),
      [VARIANT.error]: twJoin(
        "bg-error",
        "hover:bg-error/90",
        "active:bg-error/80",
      ),
      [VARIANT.info]: twJoin(
        "bg-info",
        "hover:bg-info/90",
        "active:bg-info/80",
      ),
      [VARIANT.success]: twJoin(
        "bg-success",
        "hover:bg-success/90",
        "active:bg-success/80",
      ),

      [VARIANT.warn]: twJoin(
        "bg-warn",
        "hover:bg-warn/90",
        "active:bg-warn/80",
      ),
      [VARIANT.ghost]: twJoin(
        "bg-transparent text-textColor",
        "hover:bg-surface2/50",
        "active:bg-surface2",
      ),
    };

    return (
      <button
        {...rest}
        ref={ref}
        type="button"
        className={twMerge(
          twJoin(
            "block py-2 px-3 rounded cursor-pointer",
            "text-neutral-950",
            "text-sm font-semibold",
            "transition ease-out",
            "inline-flex justify-center items-center gap-2",
          ),
          variantStyles[variant],
          className,
        )}
      >
        {children}
      </button>
    );
  },
);

type RoundButtonProps = ButtonProps;

export const RoundButton = React.forwardRef<
  HTMLButtonElement,
  RoundButtonProps
>(function RoundButton(
  { children, variant = VARIANT.ghost, ...props }: RoundButtonProps,
  ref,
) {
  return (
    <Button
      ref={ref}
      variant={variant}
      {...props}
      className={twMerge("rounded-full w-fit p-1.5", props.className)}
    >
      {children}
    </Button>
  );
});

// export function RoundButton({
//   children,
//   variant = VARIANT.ghost,
//   ...props
// }: RoundButtonProps) {
//   const { className, ...rest } = props;
//   return (
//     <Button
//       variant={variant}
//       className={twMerge("rounded-full w-fit p-1.5", className)}
//       {...rest}
//     >
//       {children}
//     </Button>
//   );
// }

export function OutlineButton({
  children,
  variant = VARIANT.ghost,
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
