import React from "react";
import Image from 'next/image';
import { ArticleCardProps } from "..";

export default function Author(props: ArticleCardProps) {
  return (
    <div className="flex items-center gap-2 mt-2 border">
      <Image
        alt={"avatar of " + props.author}
        width={30}
        height={30}
        className="rounded-full"
        src={
          "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" +
          props.author.split(" ").join("+")
        }
      />

      {/* TODO: Search how to align vertically text with tailwind ... */}
      <span className="text-secondary font-bold whitespace-nowrap border">
        {props.author}
      </span>
    </div>
  );
}
