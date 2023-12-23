import React from "react";
import { ArticleCardProps } from ".";
import Pill from "@/ui/pill";

export default function Body(props: ArticleCardProps) {
  return (
    <div className="mt-2">
      <h3 className="line-clamp-3 text-justify lg:text-left">{props.title}</h3>
      <div className="mt-2 flex justify-end gap-1">
        {displayTags(props.tags)}
      </div>
    </div>
  );
}

function displayTags(tags: string[]) {
  let tagsRow: JSX.Element[] = [];

  for (let i = 0; i < tags.length; i++) {
    if (i === 3) {
      tagsRow.push(
        <Pill variant="ghost" key={tags[i] + i}>
          + {tags.length - 3}
        </Pill>,
      );
      break;
    }
    tagsRow.push(
      <Pill variant="primary" key={tags[i] + i}>
        #{tags[i]}
      </Pill>,
    );
  }

  return tagsRow;
}
