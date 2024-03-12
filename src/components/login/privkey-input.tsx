"use client";

import { Button } from "@/ui/buttons";
import { Input } from "@/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { useState } from "react";

export default function PrivkeyInput() {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <div className="flex">
      <span className="flex-grow">
        <Input
          type={isShow ? "text" : "password"}
          className="rounded-r-none border-r-transparent bg-backgroun"
          label="Private Key"
        />
      </span>
      <Button
        title="Toggle key visibility"
        className="rounded-l-none my-2 bg-surface2 border border-surface3 border-l-transparent"
        onClick={() => setIsShow(!isShow)}
      >
        {isShow ? (
          <EyeOffIcon className="w-5 h-5 text-subText" />
        ) : (
          <EyeIcon className="w-5 h-5" />
        )}
      </Button>
    </div>
  );
}
