"use client";

import BottomDrawer from "@/ui/bottom-drawer";
import MenuLinks from "@components/navbar2/menu-links";
import { ChevronUpIcon } from "lucide-react";
import React from "react";
import { twJoin } from "tailwind-merge";

export default function MobileMenu() {
  return (
    <BottomDrawer
      button={(open) => (
        <button className="rounded-full p-1.5 focus:outline-none">
          <ChevronUpIcon
            className={twJoin(
              "w-6 h-6 transition-transform",
              open && "rotate-180",
            )}
          />
        </button>
      )}
    >
      {(setIsOpen) => <MenuLinks setIsOpen={setIsOpen} isMobile />}
        {/* <MenuLinks isMobile /> */}
    </BottomDrawer>
  );
}
