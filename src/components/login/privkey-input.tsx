"use client";

import { Button, RoundButton } from "@/ui/buttons";
import { Input } from "@/ui/input";
import { EyeIcon, EyeOffIcon, KeyRoundIcon } from "lucide-react";
import React, { useState } from "react";
import { twJoin } from "tailwind-merge";

export default function PrivkeyInput() {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <div className="flex items-center border-b border-surface3 my-6 px-2.5">
      <div
        className={twJoin("rounded-r-none ", "rounded-md")}
      >
        <KeyRoundIcon className="w-5 h-5 self-center text-subText" />
      </div>

      <span className="flex-grow">
        <Input
          type={isShow ? "text" : "password"}
          className="border-none"
          label="Private Key"
        />
      </span>
      <RoundButton
        title="Toggle key visibility"
        className="bg-surface2/50"
        onClick={() => setIsShow(!isShow)}
      >
        {isShow ? (
          <EyeOffIcon className="w-5 h-5 text-subText" />
        ) : (
          <EyeIcon className="w-5 h-5" />
        )}
      </RoundButton>
    </div>
  );
}
