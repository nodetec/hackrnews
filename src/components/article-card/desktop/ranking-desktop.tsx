"use client";
import { Button } from "@/ui/buttons";
import { nFormatter } from "@/utils/functions";
import anime from "animejs";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import React from "react";
import { twJoin } from "tailwind-merge";

export default function Ranking(props: {
  postNr: number;
  upvotes: number;
  downvotes: number;
}) {
  const [voted, setvoted] = React.useState<"upvote" | "downvote" | null>(null);
  const upvoteRef = React.useRef<HTMLSpanElement>(null);
  const downvoteRef = React.useRef<HTMLSpanElement>(null);

  const handlevote = (input: "upvote" | "downvote") => {
    anime({
      targets: input === "upvote" ? upvoteRef.current : downvoteRef.current,
      translateY: [input === "upvote" ? -5 : 5, 0],
      translateX: [5.7, 0],
      scale: [1.4, 1],
      duration: 500,
      easing: "spring(1, 80, 10, 0)",
    });

    if (voted === input) {
      setvoted(null);
    } else {
      setvoted(input);
    }
  };

  return (
    <div className="hidden lg:flex flex-col bg-surface1 rounded-xl float-border">
      <Button
        className={twJoin(
          "text-success rounded-t-xl py-1.5 normal-case px-0 gap-0 text-sm justify-between",
          voted === "upvote" && "hover:bg-success/10 bg-success/20",
        )}
        onClick={() => handlevote("upvote")}
      >
        <span className="w-2/3 inline-block text-center pl-2">
          {nFormatter(props.upvotes, 0)}
        </span>
        <span ref={upvoteRef} className="w-1/3 inline-block relative h-full">
          <ArrowUpIcon className="w-5 h-5 absolute boder -top-2.5 -left-3" />
        </span>
      </Button>

      <h2 className="text-center text-primary font-extrabold text-lg">
        #{props.postNr}
      </h2>

      <Button
        className={twJoin(
          "text-error rounded-b-xl py-1.5 normal-case px-0 gap-0 text-sm justify-between",
          voted === "downvote" && "hover:bg-error/10 bg-error/20",
        )}
        onClick={() => handlevote("downvote")}
      >
        <span className="w-2/3 inline-block text-center pl-2">
          {nFormatter(props.downvotes, 0)}
        </span>
        <span ref={downvoteRef} className="w-1/3 inline-block relative h-full">
          <ArrowDownIcon className="w-5 h-5 absolute -top-2.5 -left-3" />
        </span>
      </Button>
    </div>
  );
}
