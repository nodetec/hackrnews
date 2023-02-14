"use client";

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
    <li className="py-4">
      <div className="flex flex-row gap-1 items-center">
        <span className="text-gray-600 font-bold mr-4">{index}</span>
        <span>{title}</span>
        <span className="cursor-pointer text-xs text-blue-600">(linktosite.com)</span>
      </div>
    </li>
  );
}
