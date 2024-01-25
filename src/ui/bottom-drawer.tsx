"use client";

import React from "react";
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

  return (
    <Drawer.Root
      open={isOpen}
      shouldScaleBackground
      onClose={() => {
        document.body.style.background = "";
      }}
      onOpenChange={setIsOpen}
    >
      <Drawer.Trigger asChild>
        {typeof button === "function" ? button(isOpen) : button}
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className={twJoin(
            "bg-background flex flex-col rounded-t-[10px] h-[94%]",
            "mt-24 fixed bottom-0 left-0 right-0 focus:outline-none",
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
