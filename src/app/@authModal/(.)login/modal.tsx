"use client";

import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { RoundButton } from "@/ui/buttons";
import { XIcon } from "lucide-react";
import { ElementRef, useEffect, useRef } from "react";
import { twJoin } from "tailwind-merge";
import anime from "animejs";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      anime({
        targets: dialogRef.current,
        translateY: [-60, 0],
        translateX: [10, 0],
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 450,
        easing: "easeOutExpo",
      });
    }
  }, []);

  function close() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      onClose={close}
      className={twJoin(
        "opacity-0 rounded-3xl ring-1 ring-surface3 p-2 bg-background shadow opacity w-full md:w-96",
        "backdrop:bg-black/60 backdrop:backdrop-blur-sm",
        // NOTE: there is currently a warning.
        // the warning is because the modal has a fixed positoin relative to the body.
        // which means auto-scroll will not work for the routes that use the modal.
        // for the case of /login it doesn't matter because it's a small modal.
        // ‼️⚠️⚠️ uncoment the lines below to "solve" the warning.
        //
        // "overflow-hidden relative"
      )}
    >
      <RoundButton onClick={close}>
        <XIcon></XIcon>
      </RoundButton>
      {children}
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
