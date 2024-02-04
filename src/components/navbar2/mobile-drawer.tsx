"use client";

import {
  ChevronDown,
  ChevronUp,
  ChevronsDown,
  Settings,
  UserIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Drawer } from "vaul";
import Link from "next/link";
import { twJoin } from "tailwind-merge";
import { routes } from "@/utils/routes";
import { Button, RoundButton } from "@/ui/buttons";
import { usePathname } from "next/navigation";
import ThemeToggler from "./theme-toggler";
import RelayPreferences from "./relay-preferences";
import { closeOnScreenSize } from "@utils/functions";

// NOTE: Setting the snap array to 0 as initial value is a hack
// to prevent the drawer from closing on initial render.
// details of what was happening:
// 1 - user would go to page and click the drawer
// 2 - the drawer would open and snap to 0.4.
// 3 - when expanding the drawer, it would close
// 4 - the second time the user would expand it would work as it should!
// this was was merely a guess of luck
const snapPoints = [0, 0.35, 1];

export default function MobileDrawer() {
  const [snap, setSnap] = useState<number | string | null>(snapPoints[0]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const unmount = closeOnScreenSize(() => setOpen(false));
    return unmount;
  }, []);

  useEffect(() => {
    if (snap === 0) {
      setOpen(false);
    }
  }, [snap]);

  return (
    <Drawer.Root
      open={open}
      onOpenChange={setOpen}
      snapPoints={snapPoints}
      fadeFromIndex={1}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      preventScrollRestoration={false}
      onClose={() => (document.body.style.backgroundColor = "")}
    // direction={window.matchMedia("(max-width: 1024px)").matches ? "bottom" : "right"}
    >
      <Drawer.Trigger
        onClick={() => setSnap(snapPoints[1])}
        className="rounded-full p-1.5"
      >
        <Settings className="w-6 h-6" />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay
          forceMount
          className="fixed inset-0 bg-black/40 z-[999]"
        />
        <Drawer.Content
          className={twJoin(
            "h-full max-h-[95%] bg-background flex flex-col rounded-t-3xl border",
            "border-surface2 focus:outline-none border-b-none w-[98%] fixed bottom-0 inset-x-1",
            "z-[999] shadow-xl shadow-black text-textColor",
          )}
        >
          <div className="px-4 pt-4 rounded-t-[10px] flex-1 max-h-full overflow-hidden flex flex-col gap-10">
            {/* ACCESSIBILITY BUTTONS - EXPAND/CLOSE */}
            <SnapControls snap={snap} setSnap={setSnap} setOpen={setOpen} />
            {/* DRAG DECORATION */}
            <div
              className={twJoin(
                "mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-discreetText",
              )}
            />
            <div
              className={twJoin(
                "max-w-md mx-auto space-y-10 max-h-[95%] pb-10 snap-y",
                snap === 1 && "overflow-y-auto scrollbar-hide",
                snap !== 1 && "overflow-hidden",
              )}
            >
              <div
                className={twJoin(
                  "flex flex-wrap mx-auto gap-2",
                  "justify-center",
                )}
              >
                {routes.map((route) => (
                  <DrawerLink
                    callback={() => setOpen(false)}
                    route={route}
                    key={route.name}
                    className="grow"
                    snap={snap}
                  />
                ))}
                <DrawerLink
                  callback={() => setOpen(false)}
                  route={{
                    name: "Login",
                    path: "/login",
                    icon: <UserIcon className="w-5 h-5 text-error" />,
                  }}
                  snap={snap}
                  className="grow border-primary rounded"
                />
              </div>

              {/* THEME TOGGLER */}
              <ThemeToggler />
              {/* RELAY PREFERENCES */}
              <RelayPreferences />
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

function DrawerLink({
  snap,
  route,
  callback,
  className,
}: {
  route: (typeof routes)[number];
  snap: number | string | null;
  callback: () => void;
  className?: string;
}) {
  const path = usePathname();

  return (
    <Link href={route.path} className={className}>
      <Button
        onClick={callback}
        variant="ghost"
        className={twJoin(
          "bg-surface1 text-subText py-4 px-4 border-none w-full rounded-xl",
          snap === 1 ? "justify-center min-w-full flex-col" : "gap-3",
        )}
      >
        <span>{route.icon}</span>
        <span
          className={twJoin(
            path === route.path && "underline underline-offset-2 decoration-2",
          )}
        >
          {route.name}
        </span>
      </Button>
    </Link>
  );
}

/**
 * Actions for the drawer (maximizing, minimizing && closing)
 */
function SnapControls({
  snap,
  setSnap,
  setOpen,
}: {
  snap: number | string | null;
  setSnap: (snap: number | string | null) => void;
  setOpen: (open: boolean) => void;
}) {
  return (
    <div className="fixed right-4 top-4">
      {snap === 1 ? (
        <div className="space-x-5">
          <RoundButton
            onClick={() => {
              setSnap(snapPoints[1]);
            }}
          >
            <ChevronDown className="w-7 h-7 text-discreetText" />
          </RoundButton>

          <RoundButton
            onClick={() => {
              setOpen(false);
            }}
            className="bg-surface2/80 p-1"
          >
            <ChevronsDown className="w-7 h-7 text-subText" />
          </RoundButton>
        </div>
      ) : (
        <RoundButton
          onClick={() => {
            setSnap(snapPoints[2]);
          }}
          className="bg-surface2/80 p-1"
        >
          <ChevronUp className="w-7 h-7 text-discreetText animate-bounce" />
        </RoundButton>
      )}
    </div>
  );
}
