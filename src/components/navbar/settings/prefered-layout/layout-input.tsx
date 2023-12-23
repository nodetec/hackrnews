"use client";

import { setPreferenceCookie } from "@/utils/actions/user-preferences";
import React from "react";

export default function LayoutInput({
  option,
  currSelected,
}: {
  option: string;
  currSelected: string;
}) {
  // NOTE: I can style fade in/out animations using the pending state from
  // the useTransition hook 
  const [_pending, startTransition] = React.useTransition();

  return (
    <input
      onChange={async (e) => {
        startTransition(() => {
          setPreferenceCookie("layout", e.target.value);
        });
      }}
      className="appearance-none"
      checked={option === currSelected}
      type="radio"
      id={option}
      name="layout"
      value={option}
    />
  );
}
