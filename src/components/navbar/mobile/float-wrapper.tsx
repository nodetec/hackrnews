"use client";

import { RoundButton } from "@ui/buttons";
import styles from "@components/navbar/styles.module.css";
import { XIcon } from "lucide-react";
import React from "react";
import { twJoin } from "tailwind-merge";
import { closeHandler } from "@utils/fns/modals";
import { openHandler } from "@utils/fns/modals";
import Logo from "@components/logo";

export default function FloatWrapper({
  dialogId,
  logo = false,
  toggleButton,
  children,
}: {
  dialogId: string;
  logo?: boolean;
  toggleButton: React.ReactNode;
  children: React.ReactNode;
}) {
  const openFn = openHandler.bind(null, dialogId, true);
  const closeFn = closeHandler.bind(null, dialogId, true);

  React.useEffect(() => {
    const dialog = document.getElementById(dialogId) as HTMLDialogElement;
    window.addEventListener("resize", () => {
      if (!window.matchMedia("(max-width: 1024px)").matches) {
        dialog.close();
      }
    });
  }, []);

  return (
    <div className="lg:hidden">
      <div onClick={openFn}>{toggleButton}</div>

      <dialog
        id={dialogId}
        aria-modal
        className={twJoin(
          "rounded-3xl p-4 bg-background w-full h-full text-textColor",
          "space-y-4 backdrop:bg-black/20 backdrop:backdrop-blur-md",
          styles.slideIn,
        )}
      >
        <div className="flex flex-col gap-3 h-full">
          {/* Logo and closebtn */}
          <div className="flex justify-between items-center">
            {logo && <Logo />}
            <RoundButton flat onClick={closeFn}>
              <XIcon className="w-5 h-5" />
            </RoundButton>
          </div>
          {children}
        </div>
      </dialog>
    </div>
  );
}
