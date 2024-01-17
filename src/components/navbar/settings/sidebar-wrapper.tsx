"use client";

import { RoundButton } from "@/ui/buttons";
import { closeHandler, openHandler } from "@/utils/fns/modals";
import styles from "@components/navbar/styles.module.css";
import { SettingsIcon, XIcon } from "lucide-react";
import React from "react";
import { twJoin } from "tailwind-merge";

export default function SidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const dialogId = React.useId();
  const openFn = openHandler.bind(null, dialogId, true);
  const closeFn = closeHandler.bind(null, dialogId, true);

  React.useEffect(() => {
    const dialog = document.getElementById(dialogId) as HTMLDialogElement;
    window.addEventListener("resize", () => {
      if (!window.matchMedia("(min-width: 1024px)").matches) {
        dialog.close();
      }
    });
  }, []);

  const clickOutside = (e: React.MouseEvent<HTMLDialogElement, MouseEvent>) => {
    const dialog = document.getElementById(dialogId) as HTMLDialogElement;

    const dialogDimensions = dialog.getBoundingClientRect();

    if (!dialogDimensions) {
      return;
    }

    // keypresses like esc or enter have the clientX set to 0, which triggers the close function
    if (e.clientX > 0 && e.clientX < dialogDimensions.left) {
      closeHandler(dialogId, true);
    }
  };

  return (
    <>
      <RoundButton className={"group"} onClick={openFn} flat autoFocus>
        <SettingsIcon className="transition-all group-hover:rotate-45" />
      </RoundButton>

      <dialog
        id={dialogId}
        aria-modal
        onClick={clickOutside}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.preventDefault();
            closeHandler(dialogId, true);
          }
        }}
        aria-labelledby="settings-sidebar"
        className={twJoin(
          "w-[400px] fixed top-0 right-0 mr-4 h-screen",
          "bg-background text-textColor rounded-3xl p-4",
          styles.slideIn,
        )}
      >
        <RoundButton
          onClick={closeFn}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              closeHandler(dialogId, true);
            }
          }}
          className="text-error sticky top-0 bg-background"
          flat
        >
          <XIcon className="w-6 h-6" />
        </RoundButton>
        {children}
      </dialog>
    </>
  );
}
