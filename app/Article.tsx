"use client";

import { HandThumbUpIcon, LinkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function Article({ event, index }: any) {
  const [title, setTitle] = useState("");

  const getTagValue = (name: string, tags: string[][]) => {
    const [itemTag] = tags.filter((tag: string[]) => tag[0] === name);
    const [, item] = itemTag || [, undefined];
    return item;
  };

  useEffect(() => {
    const tags: string[][] = event.tags;
    setTitle(getTagValue("title", tags));
    // console.log("EVENT ID:", event.id);
  }, []);

  return (
    <li className="py-4 px-4 ring-1 ring-gray-500 hover:bg rounded-md ">
      <div className="flex flex-row gap-1 items-center">
        <span className="font-bold mr-4 txt-color flex items-center flex-col ring-1 ring-primary rounded">
          <button className="p-2 bg-primary txt-color"><HandThumbUpIcon className="h-4 w-4"/></button>
          {index}
        </span>
        <span>{title}</span>
        <span className="cursor-pointer text-[0.6rem] text-subtitle  font-semibold uppercase flex items-center m-3">[<LinkIcon className="h-3 w-3" />linktosite.com]</span>
      </div>
    </li>
  );
}
