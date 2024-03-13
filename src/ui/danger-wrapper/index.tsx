import React from "react";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.css";

export default function DangerWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={twMerge(styles.stripes, "p-[3px] rounded-lg", className)}>
      <div className="bg-background rounded-lg">{children}</div>
    </div>
  );
}
