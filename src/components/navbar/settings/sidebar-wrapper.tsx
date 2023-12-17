"use client";

import React from "react";
import { twJoin } from "tailwind-merge";
import styles from "../styles.module.css";
import { RoundButton } from "@/ui/buttons";
import { SettingsIcon, XIcon } from "lucide-react";
import { closeHandler } from "@/utils/fns/modals";
import { openHandler } from "@/utils/fns/modals";

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const dialog = React.useRef<HTMLDialogElement>(null);
  const openFn = openHandler.bind(null, dialog, true);
  const closeFn = closeHandler.bind(null, dialog, true);

  const clickOutside = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    const dialogDimensions = dialog.current?.getBoundingClientRect();

    if (!dialogDimensions) {
      return;
    }

    // keypresses like esc or enter have the clientX set to 0, which triggers the close function
    if (e.clientX > 0 && e.clientX < dialogDimensions.left) {
      closeHandler(dialog, true);
    }
  };

  return (
    <>
      <RoundButton className={"group"} onClick={openFn} flat>
        <SettingsIcon className="transition-all group-hover:rotate-45" />
      </RoundButton>

      <dialog
        ref={dialog}
        aria-modal
        onClick={clickOutside}
        onKeyDown={(e) => {
          e.preventDefault();
          if (e.key === "Escape") {
            closeHandler(dialog, true);
          }
        }}
        aria-labelledby="settings-sidebar"
        className={twJoin(
          "w-[400px] fixed top-0 right-0 mr-4 h-screen",
          "bg-background text-textColor rounded-3xl p-4 overflow-scroll",
          // "xl:backdrop:hidden",
          styles.slideIn,
        )}
      >
        <RoundButton
          onClick={closeFn}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              closeHandler(dialog, true);
            }
          }}
          className="text-error mb-8"
          flat
        >
          <XIcon className="w-6 h-6" />
        </RoundButton>

        {children}
      </dialog>
    </>
  );
}
