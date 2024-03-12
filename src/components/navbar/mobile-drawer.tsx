"use client";

import { Button, RoundButton } from "@/ui/buttons";
import { closeOnScreenSize, isMobile } from "@/utils/misc";
import { routes } from "@/utils/routes";
import {
  ChevronDown,
  ChevronUp,
  ChevronsDown,
  Settings,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { twJoin } from "tailwind-merge";
import { Drawer } from "vaul";
import RelayPreferences from "./relay-preferences";
import ThemeToggler from "./theme-toggler";

// INFO: Setting the snap array to 0 as initial value is a hack
// to prevent the drawer from closing on initial render.
// details of what was happening:
// 1 - user would go to page and click the drawer
// 2 - the drawer would open and snap to 0.4.
// 3 - when expanding the drawer, it would close
// 4 - the second time the user would expand it would work as it should!
// this was was merely a guess of luck

let snapPoints = [0, 0.35, 1];

export default function MobileDrawer() {
  const [snap, setSnap] = useState<number | string | null>(snapPoints[0]);
  const [open, setOpen] = useState<boolean>(false);
  const [link, setLink] = useState<string | null>(null);

  const router = useRouter();
  const scrollableRef = useRef<HTMLDivElement>(null);

  //TODO: This event doesn't work on safari mobile, because the drawer component triggers the
  //url bar, which triggers a screen size chaged event. This means that the listener will be
  //triggered.
  useEffect(() => {
    if (!isMobile()) {
      return closeOnScreenSize(() => setOpen(false));
    }
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
      onClose={() => {
        // document.body.style.backgroundColor = "";

        // WARN: super weird code below. I so regret using this component with links.
        // if you are trying to fix this, please let me know (I would love to know a better
        // solutuion for this problem).
        // Read the explanation below.
        setTimeout(() => {
          if (link) {
            router.push(link);
            setLink(null);
          }
        }, 450);
        // INFO: Exaplanation: The way the browser history() api (or the nextJS router() api) works
        // is that it will add to the current history stack the new link. This means that the
        // current page position - scrollY, clientY, etc. - are retrieved and put in the object that
        // goes to the stack along with other info like previous path and so on. So
        // if you go back in history, the browser will scroll to that position. However, vaul drawer
        // had to be abnormal and it limits the size of the body to the current size of the screen,
        // which means whatever position you were on Y would be lost = 0 -> no bueno!!! 👿
        // So to fix this, I had to write all this component in a hacky way
        // 1st - The menu-links are not links... They simply set the link state to the next page.
        // 2nd - After clicking the menu-links, the drawer will close. Which means that the onClose
        // attr will be triggered, and the link state will be set to null, after pushing the
        // state to the router (for soft-linking). However, after long time debating why this doesn't
        // work I finally came up with this, yet another, hacky solution which leads to the,
        // 3rd - The onClose runs before the actual unMount... That means that I have to set the
        // timeout so the actual linking happens then. The whole wait for the drawer to close is
        // just so vaul restores the body state and size, so the history/router apis can get the
        // current Y position and scroll back on history.back() or something like that.
        //
        // INFO: what would I have done? I would have created a component on the top level of the
        // html tree, that is fixed to the bottom of the screen, so you could expand from there
        // without touching the size of the body.
      }}
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
            <SnapControls
              snap={snap}
              setSnap={setSnap}
              setOpen={setOpen}
              containerRef={scrollableRef}
            />
            {/* DRAG DECORATION */}
            <div
              className={twJoin(
                "mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-discreetText",
              )}
            />

            {/* BODY */}
            <div
              ref={scrollableRef}
              className={twJoin(
                "max-w-md mx-auto space-y-10 max-h-[95%] pb-10 snap-y tall:snap-none",
                snap === 1 && "overflow-y-auto scrollbar-hide",
                snap !== 1 && "overflow-hidden",
              )}
            >
              <div
                className={twJoin(
                  "flex flex-wrap mx-auto gap-1",
                  snap !== 1 && "min-h-[15%] content-start",
                )}
              >
                {routes.map((route) => (
                  <DrawerLink
                    callback={() => {
                      setLink(route.path);
                      setOpen(false);
                    }}
                    route={route}
                    key={route.name}
                    className="flex-auto"
                    snap={snap}
                  />
                ))}
                <DrawerLink
                  callback={() => {
                    setLink("/login");
                    setOpen(false);
                  }}
                  route={{
                    name: "Login",
                    path: "/login",
                    accent: "bg-error",
                    icon: <UserIcon className="w-5 h-5 text-error" />,
                  }}
                  snap={snap}
                  className="border-primary rounded flex-grow"
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

  //TODO: instead of link, this will store the link where to go, which will be used after closing the drawer
  return (
    // <Link href={route.path} scroll={true} className={className}>
    <span className={className}>
      <Button
        onClick={callback}
        variant="ghost"
        className={twJoin(
          "bg-surface1 text-subText py-4 px-4 w-full rounded-xl relative",
          snap === 1 ? "justify-center min-w-full flex-col" : "gap-1",
          path === route.path && `${route.accent} bg-opacity-10`,
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
        {path === route.path && (
          <span
            className={twJoin(
              "h-2 w-2 rounded-full absolute",
              snap === 1 ? "top-1 right-1" : "left-1",
              route.accent,
            )}
          ></span>
        )}
      </Button>
    </span>
    //</Link>
  );
}

/**
 * Actions for the drawer (maximizing, minimizing && closing)
 */
function SnapControls({
  snap,
  setSnap,
  setOpen,
  containerRef,
}: {
  snap: number | string | null;
  setSnap: (snap: number | string | null) => void;
  setOpen: (open: boolean) => void;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div className="fixed right-4 top-4">
      {snap === 1 ? (
        <div className="space-x-5">
          <RoundButton
            onClick={() => {
              containerRef.current?.scrollTo({
                top: 0,
              });
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
        <>
          <RoundButton
            onClick={() => {
              setSnap(snapPoints[2]);
            }}
            className="bg-surface2/80 p-1"
          >
            <ChevronUp className="w-7 h-7 text-discreetText animate-bounce" />
          </RoundButton>
        </>
      )}
    </div>
  );
}
