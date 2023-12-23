"use client";

import { setPreferenceCookie } from "@/utils/actions/user-preferences";
import { PinIcon, PinOffIcon } from "lucide-react";
import React from "react";
import { twJoin } from "tailwind-merge";

export default function PinToNavbar({ isPinned }: { isPinned: boolean }) {
  const [_, startTransition] = React.useTransition();
  const checkboxID = React.useId();

  const setPin = async (isPinned: boolean) => {
    startTransition(() => {
      setPreferenceCookie("pinned", isPinned.toString());
    });
  };

  return (
    <label
      htmlFor={checkboxID}
      className={twJoin(
        "text-sm inline-flex flex-row-reverse items-center gap-1 p-2 rounded-lg",
        "hover:cursor-pointer hover:bg-primary/10",
        "text-discreetText",
      )}
    >
      <input
        type="checkbox"
        onChange={async (e) => await setPin(e.target.checked)}
        id={checkboxID}
        className="accent-primary w-4 h-4 peer"
        checked={isPinned}
      />
      <span className="inline-block peer-checked:text-primary">
        Pin to Navbar
      </span>
      {isPinned ? (
        <PinIcon className="w-4 h-4 text-textColor fill-warn" />
      ) : (
        <PinOffIcon className="w-4 h-4 [&>not(:peer-checked)]:text-primary" />
      )}
    </label>
  );
}
