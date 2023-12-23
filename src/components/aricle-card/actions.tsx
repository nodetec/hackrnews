import React from "react";
import { ArticleCardProps } from ".";
import { Button } from "@/ui/buttons";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  MessagesSquareIcon,
  ZapIcon,
} from "lucide-react";
import { nFormatter } from "@/utils/fns/number-formatter";

export default function Actions(props: ArticleCardProps) {
  return (
    <div className="mt-4 flex justify-between items-center">
      <div className="space-x-2 flex-1 flex justify-start">
        <Button className="px-2 py-1 gap-0 text-success" flat>
          <ChevronUpIcon className="w-5 h-5" />
          {nFormatter(props.upvotes)}
        </Button>

        <Button className="px-2 py-1 gap-0 text-error" flat>
          <ChevronDownIcon className="w-5 h-5" />
          {nFormatter(props.downvotes)}
        </Button>
      </div>
      <div className="flex-1 flex justify-center">
        <Button className="px-2 py-1 gap-1" flat>
          <MessagesSquareIcon className="w-5 h-5" />
          {nFormatter(props.comments)}
        </Button>
      </div>
      <div className="flex-1 flex justify-end">
        <Button className="px-2 py-1 gap-1" flat>
          <ZapIcon className="w-5 h-5 text-warn" />
          {nFormatter(props.sats)}
        </Button>
      </div>
    </div>
  );
}
