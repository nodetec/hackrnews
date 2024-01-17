import React from "react";
import { ArticleCardProps } from "..";
import { RoundButton } from "@/ui/buttons";
import { InfoIcon } from "lucide-react";

export default function Header(props: ArticleCardProps) {
  return (
    <div className="bg-surface1 flex items-center gap-4 py-1 px-2 rounded-lg">
      <span className="text-md text-primary p-1">#{props.postNr}</span>
      <span className="text-discreetText">{props.date}</span>
      <RoundButton className="h-8 w-8 p-1.5 ml-auto" flat>
        <InfoIcon className=" text-info"/>
      </RoundButton>
    </div>
  );
}
