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

import React from "react";
import { Drawer } from "vaul";
import { Button } from "@ui/buttons";
import { SearchIcon } from "lucide-react";
import { RELAYS_MOCK } from "./relays.mock";
import { twJoin } from "tailwind-merge";
import Image from "next/image";
import Switch from "@/ui/switch";

//ISSUE: problem with desktop small screen. for some reason the links disappear
export default function RelayPreferences() {
  return (
    <div className={twJoin("h-full flex flex-col snap-center tall:snap-none")}>
      <Drawer.Title className="text-lg font-bold font-mono w-3/4 mx-auto mb-2">
        Relay Preferences
      </Drawer.Title>

      <div className="rounded-xl bg-surface1 h-full overflow-y-hidden ">
        <div className="w-full flex p-2 border-b border-surface3">
          <input
            className="grow rounded-l-xl px-2 py-1 rounded-r-none focus:outline-none 
            placeholder:italic focus:placeholder:text-transparent border border-surface3"
            type="text"
            placeholder="search..."
          />
          <Button
            className="rounded-r-xl bg-surface2 rounded-l-none"
            type="submit"
          >
            <SearchIcon className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex flex-col gap-2 px-4 py-1 h-full overflow-y-auto pb-20">
          {RELAYS_MOCK.map((relay) => (
            <div
              key={relay.displayName}
              className={twJoin(
                "bg-background space-y-1 rounded-lg",
                "px-3 py-1 snap-center float-border",
              )}
            >
              {/* Header */}
              <div className="flex items-center">
                <Image
                  src={relay.avatar}
                  alt={relay.displayName}
                  width={200}
                  height={200}
                  className="w-10 h-10 rounded-full"
                />
                {/* TODO: MAH how to sroten this and show relevant name info */}
                <p className="ml-4 font-bold text-sm">{relay.displayName}</p>
              </div>

              <form className="flex justify-between">
                <Switch label="read" className="uppercase" />
                <Switch label="write" className="uppercase" />
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
