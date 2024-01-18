"use client";

import { RoundButton } from "@/ui/buttons";
import ImageAvatar from "@/ui/image-avatar";
import { nFormatter } from "@/utils/fns/number-formatter";
import { Popover, Transition } from "@headlessui/react";
import { CalendarXIcon, EyeIcon, InfoIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { twJoin } from "tailwind-merge";

export default function InfoBtn({
  date,
  views,
  author,
  authorsImage,
}: {
  date: string;
  views: number;
  author: string;
  authorsImage: string;
}) {
  const [closeOnScroll, setCloseOnScroll] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    setCloseOnScroll(true);
  }

  return (
    <Popover className="relative ml-auto">
      {({ open }) => (
        <>
          <Popover.Button as="span">
            <RoundButton
              flat={!open}
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
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel
              className={twJoin(
                "absolute -top-1/3 right-full mr-2 w-72 origin-top-right",
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
                <Link href="#" className="col-span-8 truncate text-ellipsis flex items-center">
                  {author}
                </Link>
                <CalendarXIcon className="col-span-2 text-secondary w-5 h-5" />
                <span className="col-span-8 text-subText text-sm">{date}</span>
                <EyeIcon className="col-span-2 text-secondary w-5 h-5" />
                <span className="col-span-8 text-sm text-subText">
                  {nFormatter(views)}
                </span>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
