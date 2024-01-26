"use client";

import React, { useEffect } from "react";
import { twJoin } from "tailwind-merge";
import { Drawer } from "vaul";

type StateActionCtx = React.Dispatch<React.SetStateAction<boolean>>;

export default function BottomDrawer({
  children,
  button,
}: {
  children: ((setIsOpen: StateActionCtx) => React.ReactNode) | React.ReactNode;
  button: ((isOpen: boolean) => React.ReactNode) | React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      const wrapper = document.getElementById("body-vaul-drawer-wrapper");
      wrapper!.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <Drawer.Root
      open={isOpen}
      onOpenChange={setIsOpen}
    // shouldScaleBackground
    // onClose={() => {
    //   document.body.style.background = "";
    // }}
    // onOpenChange={(e) => {
    //   animateElements(e);
    //   setIsOpen(e);
    // }}
    >
      <Drawer.Trigger asChild>
        {typeof button === "function" ? button(isOpen) : button}
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-[999]" />
        <Drawer.Content
          className={twJoin(
            "bg-background flex flex-col rounded-t-[10px] min-h-[20%] pb-8",
            "mt-24 fixed bottom-0 left-0 right-0 focus:outline-none z-[999]",
          )}
        >
          <div className="p-4 rounded-t-[10px] flex-1">
            <div className="mx-auto w-14 h-1.5 flex-shrink-0 rounded-full bg-surface3 mb-12" />
            <div className="max-w-md mx-auto">
              {typeof children === "function" ? children(setIsOpen) : children}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

// function animateElements(ev: boolean) {
//   const wrapper = document.getElementById("body-vaul-drawer-wrapper");
//   const body = document.body;
//   anime({
//     targets: wrapper,
//     scale: ev ? 0.95 : 1,
//     borderRadius: ev ? "15%" : "0",
//     // borderRadius: ["0%", "50%"],
//     overflow: ev ? "hidden" : "unset",
//     duration: 200,
//     easing: "easeInOutCubic",
//     begin: () => {
//       if (ev) {
//         body.style.background = "#000000";
//         body.style.position = "fixed";
//         wrapper?.classList.add("h-screen", "overflow-hidden", "fixed");
//       }
//     },
//     complete: () => {
//       if (!ev) {
//         body.style.background = "";
//         wrapper?.classList.remove("overflow-hidden");
//       }
//     },
//   });
// }
