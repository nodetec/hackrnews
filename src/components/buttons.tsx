import Link from "next/link";
import { twJoin, twMerge } from "tailwind-merge";

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export function IconButton({ children, ...props }: BaseButtonProps) {
  const { className, ...rest } = props;
  return (
    <button
      className={twMerge(
        "flex items-center justify-center shadow-md ring-1 ring-black/5",
        "p-2 rounded-full",
        "active:bg-surface2/50",
        "hover:shadow-lg",
        "transition ease-out",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

type LinkButtonProps = BaseButtonProps & {
  href: string;
};

export function LinkButton({ children, href, ...props }: LinkButtonProps) {
  const { className, ...rest } = props;
  return (
    <Link href={href}>
      <button
        className={twMerge(
          "w-full text-left py-3 pl-4 rounded-xl",
          "uppercase text-sm font-semibold",
          "hover:bg-surface2",
          "decoration-primary decoration-4 underline-offset-2",
          "group",
          "active:bg-surface3 active:decoration-primary active:underline",
          "transition ease-linear",
          "flex items-stretch gap-4",
          "[&>svg]:active:fill-primary",
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    </Link>
  );
}

enum VARIANT {
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

export function Button({
  children,
  variant = VARIANT.primary,
  ...props
}: ButtonProps) {
  const { className, ...rest } = props;

  const variantStyles = {
    [VARIANT.primary]: twJoin(
      "bg-primary shadow",
      "hover:shadow-lg hover:bg-primary/90",
      "active:shadow active:bg-primary/80",
    ),
    [VARIANT.error]: twJoin(
      "bg-error shadow",
      "hover:shadow-lg hover:bg-error/90",
      "active:shadow active:bg-error/80",
    ),
    [VARIANT.info]: twJoin(
      "bg-info shadow",
      "hover:shadow-lg hover:bg-info/90",
      "active:shadow active:bg-info/80",
    ),
    [VARIANT.success]: twJoin(
      "bg-success shadow",
      "hover:shadow-lg hover:bg-success/90",
      "active:shadow active:bg-success/80",
    ),

    [VARIANT.warn]: twJoin(
      "bg-warn shadow",
      "hover:shadow-lg hover:bg-warn/90",
      "active:shadow active:bg-warn/80",
    ),
    [VARIANT.ghost]: twJoin(
      "bg-transparent",
      "hover:bg-surface2/50 hover:shadow-lg",
      "active:bg-surface2 active:shadow",
    ),
  };

  return (
    <button
      className={twMerge(
        "w-full py-2 px-3 rounded",
        "text-textColor border border-black/5 shadow",
        "uppercase text-sm font-semibold",
        "transition ease-out",
        className,
        variantStyles[variant],
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function RoundButton({
  children,
  variant = VARIANT.ghost,
  ...props
}: ButtonProps) {
  const { className, ...rest } = props;
  return (
    <Button
      variant={variant}
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
  return (
    <Button
      variant={variant}
      className={className}
      style={{
        background: "none",
        border: borderColor,
        color: color,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}
