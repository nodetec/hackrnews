/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of HackrNews.
 *
 * HackrNews is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HackrNews is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HackrNews. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * luis..f.carvalho20+hackrnews@gmail.com
 */

"use client";

import { RoundButton } from "@/ui/buttons";
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
