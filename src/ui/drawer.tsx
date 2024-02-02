"use client";

import React from "react";
import { twJoin } from "tailwind-merge";
import { Drawer as VDrawer } from "vaul";

type DrawerState = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type DrawerProps = Omit<
  React.ComponentPropsWithRef<typeof VDrawer.Root>,
  "children"
> & {
  children:
  | React.ReactNode
  | (({ isOpen, setIsOpen }: DrawerState) => React.ReactNode);
};

/**
 * Drawer component for creating a sliding drawer UI.
 * @component
 *
 * @param {DrawerProps} props -
 *
 * @example
 * // Basic usage:
 * <Drawer>
 *   {({ isOpen, setIsOpen }) => (
 *     <>
 *       <Drawer.Trigger asChild>
 *         <button className={twJoin(isOpen && "bg-red-500")}>Open Drawer</button>
 *       </Drawer.Trigger>
 *       <Drawer.Body>
 *         <div>This is the main content</div>
 *         <button onClick={() => setIsOpen(false)}>Close Drawer</button>
 *         <Drawer.Nested onClose={() => setIsOpen(false)}>
 *           <Drawer.Trigger asChild>
 *             <span>Open Nested Drawer</span>
 *           </Drawer.Trigger>
 *           <Drawer.Body>
 *             <div>This is the nested content</div>
 *           </Drawer.Body>
 *         </Drawer.Nested>
 *       </Drawer.Body>
 *     </>
 *   )}
 * </Drawer>
 *
 * note: if you don't need to access state modifiers, you can pass children without a function
 */
function Drawer({ children }: DrawerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <VDrawer.Root open={isOpen} onOpenChange={setIsOpen}>
      {typeof children === "function"
        ? children({ isOpen, setIsOpen })
        : children}
    </VDrawer.Root>
  );
}

type TriggerProps = {
  children: JSX.Element;
} & React.ComponentPropsWithRef<typeof VDrawer.Trigger>;
function Trigger({ children, ...props }: TriggerProps) {
  return <VDrawer.Trigger {...props}>{children}</VDrawer.Trigger>;
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <VDrawer.Portal>
      <VDrawer.Overlay className="fixed inset-0 bg-black/40 z-[999]" />
      <VDrawer.Content
        className={twJoin(
          "bg-background flex flex-col rounded-t-[10px] min-h-[20%] pb-8",
          "mt-24 fixed bottom-0 left-0 right-0 focus:outline-none z-[999]",
        )}
      >
        <div className="p-4 rounded-t-[10px] flex-1">
          <div className="mx-auto w-14 h-1.5 flex-shrink-0 rounded-full bg-surface3 mb-12" />
          <div className="max-w-md mx-auto">{children}</div>
        </div>
      </VDrawer.Content>
    </VDrawer.Portal>
  );
}

type TitleProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithRef<typeof VDrawer.Title>;
function Title({ children, ...props }: TitleProps) {
  return <VDrawer.Title {...props}>{children}</VDrawer.Title>;
}

type NestedProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithRef<typeof VDrawer.NestedRoot>;
function Nested({ children, ...props }: NestedProps) {
  return <VDrawer.NestedRoot {...props}>{children}</VDrawer.NestedRoot>;
}

Drawer.Trigger = Trigger;
Drawer.Body = Body;
Drawer.Title = Title;
Drawer.Nested = Nested;

export default Drawer;
