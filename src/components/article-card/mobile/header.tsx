import React from "react";
import { ArticleCardProps } from "..";
import InfoBtn from "./info-btn";

export default function Header(props: ArticleCardProps) {
  return (
    <div className="bg-surface1 flex items-center gap-4 py-1 px-2 rounded-lg">
      <span className="text-md text-primary p-1">#{props.postNr}</span>
      <span className="text-discreetText">{props.date}</span>
      <InfoBtn relay={props.relay} date={props.date} views={props.views} />
    </div>
  );
}
