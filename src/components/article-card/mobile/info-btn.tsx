/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of Hackr News.
 *
 * Hackr News is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Hackr News is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Hackr News. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * chris.machine@pm.me
 */

"use client";

import * as Popover from "@radix-ui/react-popover";
import CheckAnimation, { ExtendedRef } from "@/ui/animated-check";
import { RoundButton } from "@/ui/buttons";
import ImageAvatar from "@/ui/image-avatar";
import { nFormatter } from "@/utils/misc";
import { useCopyToClipboard } from "@/utils/hooks/copy-to-clipboard";
import { CodeIcon, CopyIcon, EyeIcon, InfoIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { twJoin } from "tailwind-merge";
import { floatClasses } from "@/ui/prestyled";

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
  const [open, setOpen] = React.useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <RoundButton
          className={twJoin(
            "relative ml-auto",
            "flex items-center rounded-full hover:bg-surface2 p-2 active:bg-surface3",
            open && "bg-surface3",
          )}
        >
          <InfoIcon className="text-info w-5 h-5" />
        </RoundButton>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          side="left"
          sideOffset={5}
          className={twJoin(
            "w-72",
            "p-4 ring-1 ring-surface3 shadow bg-background rounded-lg",
            floatClasses,
          )}
        >
          <div className="grid grid-cols-10 gap-y-2 border-surface3">
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

            <EyeIcon className="col-span-2 text-secondary w-5 h-5" />
            <span className="col-span-8 text-sm text-subText">
              {nFormatter(views)}
            </span>
            <span className="col-span-3 text-secondary flex items-center text-xs font-bold">
              {/* <CodeIcon className="w-3 h-3" /> */}
              &lt;event&gt;
            </span>

            <button
              // FIXME: add real eventID
              onClick={() => {
                copy("lasdkjflasdjflasdjlfjaskldjflkasdjfljasldflasjdfljk");
                checkAnimeRef.current?.animateCheckOnClick();
              }}
              className="col-span-7 text-sm text-subText flex relative outline-none"
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

          <Popover.Arrow className="fill-background drop-shadow-[0_1px_0px_theme(colors.surface3)]" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

