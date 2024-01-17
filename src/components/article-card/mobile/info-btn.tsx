"use client";

import ImageAvatar from "@/ui/image-avatar";
import { nFormatter } from "@/utils/fns/number-formatter";
import { Popover, Transition } from "@headlessui/react";
import { CalendarXIcon, EyeIcon, InfoIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function InfoBtn({
  relay,
  date,
  views,
}: {
  relay: string;
  date: string;
  views: number;
}) {
  return (
    <Popover className="relative ml-auto">
      <Popover.Button className="flex items-center rounded-full p-2 hover:bg-surface2/40 active:bg-surface3">
        <InfoIcon className="text-info w-5 h-5" />
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
        <Popover.Panel className="absolute right-full -top-1/3 mt-2 w-72 origin-top-right bg-surface2 rounded-lg p-4">
          <div className="grid grid-cols-10 gap-y-4">
            <ImageAvatar
              // FIXME: for now we only show a mocking image
              src={"https://picsum.photos/200"}
              alt="relay"
              fallbackSrc="https://picsum.photos/200"
              className="col-span-2"
            />
            <Link href="#" className="col-span-8 truncate text-ellipsis">{relay}</Link>
            <CalendarXIcon className="col-span-2 text-secondary w-5 h-5" />
            <span className="col-span-8 text-subText text-sm">{date}</span>
            <EyeIcon className="col-span-2 text-secondary w-5 h-5" />
            <span className="col-span-8 text-sm text-subText">
              {nFormatter(views)}
            </span>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
