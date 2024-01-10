"use client";
import { Button } from "@/ui/buttons";
import { nFormatter } from "@/utils/fns/number-formatter";
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react";
import React from "react";
import { twJoin } from "tailwind-merge";

export function Votes({
  upvotes,
  downvotes,
}: {
  upvotes: number;
  downvotes: number;
}) {
  const [voted, setVoted] = React.useState<"upvote" | "downvote" | null>(null);
  const handleVote = (variant: "upvote" | "downvote") => {
    if (voted === variant) {
      setVoted(null);
    } else {
      setVoted(variant);
    }
  };

  return (
    <div>
      <Button
        onClick={() => handleVote("upvote")}
        flat
        className={twJoin(
          "px-2 py-1 text-success gap-0 mt-auto w-full text-sm",
          "flex-col group",
          "text-success active:bg-success/35",
          voted === "upvote" && "bg-success/35 hover:bg-success/25",
        )}
      >
        <ChevronUpIcon className="w-6 h-6" />
        <span
          className={twJoin(
            "bg-success/10 p-1 rounded w-14",
            voted === "upvote" && "bg-success/0 group-hover:bg-success/0",
          )}
        >
          {nFormatter(upvotes)}
        </span>
      </Button>

      <Button
        onClick={() => handleVote("downvote")}
        flat
        className={twJoin(
          "px-2 py-1 text-success gap-0 mt-auto w-full text-sm",
          "flex-col group",
          "text-error active:bg-error/35",
          voted === "downvote" && "bg-error/35 hover:bg-error/25",
        )}
      >
        <span
          className={twJoin(
            "bg-error/10 p-1 rounded w-14",
            voted === "downvote" && "bg-error/0 group-hover:bg-error/0",
          )}
        >
          {nFormatter(downvotes)}
        </span>
        <ChevronDownIcon className="w-6 h-6" />
      </Button>
    </div>
  );
}
