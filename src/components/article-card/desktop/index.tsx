import React from "react";
import { Button } from "@/ui/buttons";
import {
  LinkIcon,
  MessagesSquareIcon,
  ZapIcon,
} from "lucide-react";
import { twJoin } from "tailwind-merge";
import { nFormatter } from "@/utils/fns/number-formatter";
import Image from "next/image";
import Ranking from "./ranking-desktop";
import displayTags from "@/components/display-tags";

export type ArticleCardProps = {
  postNr: number;
  title: string;
  date: string;
  author: string;
  relay: string;
  views: number;
  upvotes: number;
  downvotes: number;
  comments?: number;
  sats: number;
  tags: string[];
};

export default function DesktopCard(props: ArticleCardProps) {
  return (
    <div className="grid-rows-2 hidden lg:grid grid-cols-12 gap-y-4">
      {/* Post Nr, Upvotes, Downvotes */}
      <div className="col-span-1 row-span-2 flex flex-col rounded-xl bg-surface1 overflow-hidden">
        <Ranking upvotes={props.upvotes} downvotes={props.downvotes} postNr={props.postNr} />
      </div>

      {/* Article title - Header */}
      <div className="col-span-11 row-span-1 flex items-end gap-2 ml-2 pr-2">
        <h2 className="text-base whitespace-nowrap">{props.title}</h2>
        <div
          className={twJoin(
            "grow overflow-hidden text-ellipsis whitespace-nowrap gap-1 text-link",
            "underline underline-offset-2 cursor-pointer",
          )}
        >
          <LinkIcon className="w-3 h-3 inline mr-1" />
          {props.relay}
        </div>
      </div>

      {/* Article button bar */}
      <div className="col-span-11 row-span-1 ml-2 flex items-center gap-4">
        <Button flat className="py-0.5 px-1 gap-1 text-subText">
          <MessagesSquareIcon className="w-5 h-5" />
          {nFormatter(props.comments || 0)}
        </Button>

        <Button flat className="py-0.5 px-1 gap-1 text-subText">
          <ZapIcon className="text-warn w-5 h-5" />
          {nFormatter(props.sats)}
        </Button>

        <h4 className="text-sm text-discreetText font-bold">{props.date}</h4>

        <Button
          className="text-info flex items-center gap-1 p-0 pr-1 rounded-l-full text-sm normal-case"
          flat
        >
          <Image
            alt={"avatar of " + props.author}
            width={25}
            height={25}
            className="rounded-full"
            src={
              "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" +
              props.author.split(" ").join("+")
            }
          />
          <span>{props.author}</span>
        </Button>

        <div className="ml-auto col-span-11 row-span-1 flex items-center justify-end gap-1">
          {displayTags(props.tags, 4)}
        </div>
      </div>
    </div>
  );
}
