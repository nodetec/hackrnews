import React from "react";
import { ArticleCardProps } from "..";
import InfoBtn from "./info-btn";

export default function Header(props: ArticleCardProps) {
  return (
    <div className="bg-surface1 border border-surface2 flex items-center gap-4 py-1 px-2 rounded-lg h-12">
      <span className="text-lg text-primary p-1">#{props.postNr}</span>
      <span className="text-discreetText text-sm">{props.date}</span>
      <InfoBtn
        author={props.author}
        authorsImage={
          "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" +
          props.author.split(" ").join("+")
        }
        date={props.date}
        views={props.views}
      />
    </div>
  );
}
