import React from "react";
import styles from "./styles.module.css";
import { twJoin, twMerge } from "tailwind-merge";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label = "label", ...props }, ref) => {
    return (
      <div className={`relative ${styles.input}`}>
        <div className="relative float-label-input">
          <input
            ref={ref}
            type={type}
            className={twMerge(
              twJoin(
                "peer block bg-transparent w-full focus:outline-none focus:shadow-outline border",
                "border-surface3 rounded-m py-2.5 px-3  appearance-none leading-normal",
                "disabled:border-opacity-40 disabled:cursor-not-allowed",
                "disabled:text-opacity-40",
              ),
              className,
            )}
            {...props}
            placeholder=" "
          />
          <label
            className={twJoin(
              "absolute top-3 left-0 text-base text-subText pointer-events-none transition duration-200",
              "ease-in-out bg-inherit px-2 peer-disabled:opacity-40 peer-focus:text-black rounded-xl",
            )}
          >
            {label}
          </label>
        </div>
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
