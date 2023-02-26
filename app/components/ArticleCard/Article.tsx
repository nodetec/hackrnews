"use client";

import {
  ArrowUpIcon,
  BoltIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EyeIcon,
  LinkIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Image from "next/image";

// definitions missing like sats, upvotes, author (author link etc etc)
type PostDetails = {
  title: string;
  createdAt: string;
  source: string;
};

export default function Article({ event, index }: any) {
  // const [title, setTitle] = useState("");
  // const [url, setUrl] = useState("")
  // const [createdAt, setCreatedAt] = useState("")
  // const [client, setClient] = useState("")
  const [postDetails, setPostDetails] = useState<PostDetails | null>(null);

  const getTagValue = (name: string, tags: string[][]) => {
    const [itemTag] = tags.filter((tag: string[]) => tag[0] === name);
    const [, item] = itemTag || [, undefined];
    return item;
  };

  // NOTE: Use temporal api for date
  useEffect(() => {
    const tags: string[][] = event.tags;
    // setTitle(getTagValue("title", tags));
    setPostDetails({
      title: getTagValue("title", tags),
      source: "www.insert-link-here.org",
      createdAt: "2023/02/28 10:37",
    });
    console.log("EVENT:", event);
  }, []);

  // for now this will use mockdata
  return (
    <li className="card lg:gap-4 relative flex py-1 items-center group">
      {/* Post index */}
      <span className="text-center text-2xl grow-0 group-hover:text-primary font-light font-mono text-gray-500">
        {index}.
      </span>

      {/* Midle content (title, views, etc)*/}
      <div className="py-1 pl-6 grow">
        {/* Description */}
        <h3 className="subtitle line-clamp-2">{postDetails?.title}</h3>

        {/* URL */}
        <div className="flex items-center cursor-pointer">
          <LinkIcon className="h-3 w-3 mr-1" />[
          <span className="link text-clip inline-block align-bottom uppercase">
            {postDetails?.source}
          </span>
          ]
        </div>

        <div className="flex text-xs pt-1 align-top text-gray-500 dark:text-gray-400 gap-1 lg:gap-4">
          {/* Views */}
          <div className="flex items-center">
            <EyeIcon className="h-3 w-3 mr-1" />
            <span>35</span>
          </div>

          {/* sats */}
          <div className="flex items-center">
            {/* <IconBitcoin className="mr-1"></IconBitcoin> */}
            <button>
              <BoltIcon className="h-3 w-3 mr-1" />
            </button>
            35 sats
          </div>

          {/* Upvotes */}
          <div className="flex items-center">
            {/* <IconBitcoin className="mr-1"></IconBitcoin> */}
            <ArrowUpIcon className="h-3 w-3 mr-1" />
            237 upvotes
          </div>

          {/* Replies */}
          <div className="flex items-center hover:underline cursor-pointer">
            <ChatBubbleOvalLeftEllipsisIcon className="h-3 w-3 mr-1" />
            35 comments
          </div>
        </div>
      </div>

      <div className="py-1 flex items-center shrink-0 basis-1/4">
        {/* User Avatar */}
        <Image
          className="w-10 h-10 rounded-full mx-2"
          width={10}
          height={10}
          src="/avatar.png"
          alt="Rounded avatar"
        />
        {/* Post details*/}
        <div className="">
          <div className="text-xs text-gray-500 dark:text-gray-400 font-bold hover:underline cursor-pointer">
            by: <span className="txt-color">UserX_Y</span>
          </div>
          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">
            created at: <span>{postDetails?.createdAt}</span>
          </div>
        </div>
      </div>
    </li>
  );
}
