import React from "react";
import { Drawer } from "vaul";
import { Button } from "@ui/buttons";
import { SearchIcon } from "lucide-react";
import { RELAYS_MOCK } from "./relays.mock";
import { twJoin } from "tailwind-merge";
import Image from "next/image";
import Switch from "@/ui/switch";

export default function RelayPreferences() {
  // <div className="rounded-xl max-h-[80%] sticky top-0 border border-green-500 overflow-y-auto">
  return (
    <div>
      <Drawer.Title className="text-xl font-bold font-mono w-3/4 mx-auto mb-2">
        Relay Preferences
      </Drawer.Title>

      <div className="rounded-xl p-2 bg-surface1 space-y-4">
        <div className="w-full flex">
          <input
            className="grow rounded-l-xl px-2 py-1 rounded-r-none focus:outline-primary"
            type="text"
            placeholder="search..."
          />
          <Button className="rounded-r-xl bg-surface2 rounded-l-none" type="submit">
            <SearchIcon className="w-5 h-5" />
          </Button>
        </div>
        <div className="flex flex-col gap-2 px-4">
          {RELAYS_MOCK.map((relay) => (
            <div
              key={relay.displayName}
              className={twJoin("bg-surface2/80 space-y-5 rounded-lg", "p-6")}
            >
              {/* Header */}
              <div className={twJoin("flex items-center")}>
                <Image
                  src={relay.avatar}
                  alt={relay.displayName}
                  width={200}
                  height={200}
                  className="w-10 h-10 rounded-full"
                />
                <p className="ml-4 font-bold">{relay.displayName}</p>
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
