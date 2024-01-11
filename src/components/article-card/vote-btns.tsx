'use client'

import { Button } from "@/ui/buttons";
import { nFormatter } from "@/utils/fns/number-formatter";
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import { twJoin } from "tailwind-merge";

export default function VoteBtns({
  upvotes,
  downvotes,
}: {
  upvotes: number;
  downvotes: number;
}) {
  const [voted, setvoted] = React.useState<"upvote" | "downvote" | null>(null);

  const handlevote = (input: "upvote" | "downvote") => {
    if (voted === input) {
      setvoted(null);
    } else {
      setvoted(input);
    }
  };
  return (
    <>
      <Button
        onClick={() => handlevote("upvote")}
        className={twJoin(
          "text-success p-1 gap-0.5 mx-auto justify-between",
          "xl:w-[70%] 2xl:w-3/5 2xl:justify-end",
          "2xl:rounded-none 2xl:rounded-bl-xl",
          voted === "upvote" && "hover:bg-success/10 bg-success/20",
        )}
        flat
      >
        {nFormatter(upvotes, 0)}
        <ChevronUpIcon className="w-5 h-5" />
      </Button>

      <Button
        onClick={() => handlevote("downvote")}
        className={twJoin(
          "text-error px-1 gap-0.5 mx-auto justify-between flex-row-reverse",
          "xl:w-[70%] xl:flex-row 2xl:w-3/5 2xl:justify-start",
          "2xl:rounded-none 2xl:rounded-br-xl",
          voted === "downvote" && "hover:bg-error/10 bg-error/20",
        )}
        flat
      >
        <ChevronDownIcon className="w-5 h-5" />
        {nFormatter(downvotes, 0)}
      </Button>
    </>
  );
}
