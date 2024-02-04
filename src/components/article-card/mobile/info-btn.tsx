"use client";

import CheckAnimation, { ExtendedRef } from "@/ui/animated-check";
import { RoundButton } from "@/ui/buttons";
import ImageAvatar from "@/ui/image-avatar";
import { nFormatter } from "@/utils/functions";
import { useCopyToClipboard } from "@/utils/hooks/copy-to-clipboard";
import { Popover, Transition } from "@headlessui/react";
import anime from "animejs";
import { CodeIcon, CopyIcon, EyeIcon, InfoIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { twJoin } from "tailwind-merge";

export default function InfoBtn({
  views,
  author,
  authorsImage,
}: {
  date: string;
  views: number;
  author: string;
  authorsImage: string;
}) {
  const [_, copy] = useCopyToClipboard();
  const checkAnimeRef = React.useRef<ExtendedRef | null>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);

  return (
    <Popover className="relative ml-auto">
      {({ open }) => (
        <>
          <Popover.Button as={"span"}>
            <RoundButton
              className={twJoin(
                "flex items-center rounded-full p-2 hover:bg-surface2/40 active:bg-surface3",
                open ? "bg-surface3" : "hover:bg-surface2",
              )}
            >
              <InfoIcon className="text-info w-5 h-5" />
            </RoundButton>
          </Popover.Button>

          <Transition
            as={React.Fragment}
            // enter="transition duration-400"
            beforeEnter={() => {
              anime({
                targets: panelRef.current,
                opacity: [0, 1],
                duration: 400,
                translateX: [40, 0],
                easing: "easeOutElastic(1, .6)",
                scale: [0.75, 1],
              });
            }}
            //this leave atrribute is irrelevant but kinda necessary to trigger the anime animation
            leave="transition duration-300"
            beforeLeave={() => {
              anime({
                targets: panelRef.current,
                opacity: [1, 0],
                duration: 300,
                translateX: [0, 40],
                easing: "easeInElastic(1, .6)",
                scale: [1, 0.75],
              });
            }}
          >
            <Popover.Panel
              ref={panelRef}
              className={twJoin(
                "absolute -top-1/3 right-full mr-2 w-72",
                "p-4 ring-1 ring-black/10 dark:ring-white/5 shadow bg-surface1 rounded-lg",
              )}
            >
              <div className="grid grid-cols-10 gap-y-4">
                <ImageAvatar
                  src={authorsImage}
                  alt="Author"
                  fallbackSrc={`https://ui-avatars.com/api/?name=${author}`}
                  className="col-span-2"
                />
                <Link
                  href="#"
                  className="col-span-8 truncate text-ellipsis flex items-center"
                >
                  {author}
                </Link>

                {/* <CalendarXIcon className="col-span-2 text-secondary w-5 h-5" /> */}
                {/* <span className="col-span-8 text-subText text-sm">{date}</span> */}

                <EyeIcon className="col-span-2 text-secondary w-5 h-5" />
                <span className="col-span-8 text-sm text-subText">
                  {nFormatter(views)}
                </span>
                <CodeIcon className="col-span-2 text-secondary w-5 h-5" />

                <button
                  // FIXME: add real eventID
                  onClick={() => {
                    copy("lasdkjflasdjflasdjlfjaskldjflkasdjfljasldflasjdfljk");
                    checkAnimeRef.current?.animateCheckOnClick();
                  }}
                  className="col-span-8 text-sm text-subText flex relative"
                >
                  <span className="truncate mr-2">
                    {/* FIXME: add real eventID */}
                    lasdkjflasdjflasdjlfjaskldjflkasdjfljasldflasjdfljk
                  </span>

                  <CopyIcon className="text-secondary w-5 h-5" />

                  <CheckAnimation
                    ref={checkAnimeRef}
                    className="w-16 h-16 absolute -right-7 -top-5"
                  />
                </button>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
