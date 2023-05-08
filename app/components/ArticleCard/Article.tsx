"use client";

import {
  ArrowUpIcon,
  BoltIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EyeIcon,
  LinkIcon,
} from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { getRelativeTime, shortenHash } from "@/app/lib/utils";
import { RelayContext } from "@/app/context/relay-provider";
import { Event, nip19 } from "nostr-tools";
import { ProfilesContext } from "@/app/context/profiles-provider";

// definitions missing like sats, upvotes, author (author link etc etc)
type PostDetails = {
  title: string;
  createdAt: number;
  source: string;
};

export default function Article({ event, index }: any) {
  // const [title, setTitle] = useState("");
  // const [url, setUrl] = useState("")
  // const [createdAt, setCreatedAt] = useState("")
  // const [client, setClient] = useState("")
  const [postDetails, setPostDetails] = useState<PostDetails | null>(null);
  const { activeRelay } = useContext(RelayContext);

  // @ts-ignore
  const { profiles, reload } = useContext(ProfilesContext);

  const getTagValue = (name: string, tags: string[][]) => {
    const [itemTag] = tags.filter((tag: string[]) => tag[0] === name);
    const [, item] = itemTag || [, undefined];
    return item;
  };
  const [author, setAuthor] = useState<{ name: string; picture: string }>({
    name: "",
    picture: "",
  });
  const npub = nip19.npubEncode(event.pubkey);

  useEffect(() => {
    setAuthor({
      name: getName(event),
      picture: getPicture(event),
    });
  }, [activeRelay, reload]);

  const getName = (event: Event) => {
    if (!activeRelay) return shortenHash(npub);

    const relayUrl = activeRelay.url.replace("wss://", "");
    const profileKey = `profile_${relayUrl}_${event.pubkey}`;
    const profile = profiles[profileKey];

    if (profile && profile.content) {
      const profileContent = JSON.parse(profile.content);
      return profileContent.name || shortenHash(npub);
    }

    return shortenHash(npub);
  };

  const getPicture = (event: Event) => {
    if (!activeRelay) return;

    const relayUrl = activeRelay.url.replace("wss://", "");
    const profileKey = `profile_${relayUrl}_${event.pubkey}`;
    const profile = profiles[profileKey];

    if (profile && profile.content) {
      // TODO: check if this exists
      const profileContent = JSON.parse(profile.content);
      if (profileContent.picture === "") {
        return;
      }

      return profileContent.picture;
    }

    return;
  };

  // NOTE: Use temporal api for date
  useEffect(() => {
    const tags: string[][] = event.tags;
    // setTitle(getTagValue("title", tags));
    setPostDetails({
      title: getTagValue("title", tags),
      source: "https://www.insert-link-here.org",
      createdAt: event.created_at,
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
        {postDetails?.source && (
          <Link className="flex items-center" href={postDetails.source}>
            <LinkIcon className="h-3 w-3 mr-1" />[
            <span className="link text-clip inline-block align-bottom uppercase">
              {postDetails.source}
            </span>
            ]
          </Link>
        )}

        <div className="flex text-xs pt-1 align-top text-gray-500 dark:text-gray-400 gap-1 lg:gap-4">
          {/* Views */}
          <div className="flex items-center ">
            <EyeIcon className="h-3 w-3 mr-1" />
            <span>35</span>
          </div>

          {/* sats */}
          <div className="flex items-center hover:underline cursor-pointer">
            {/* <IconBitcoin className="mr-1"></IconBitcoin> */}
            <button>
              <BoltIcon className="h-3 w-3 mr-1" />
            </button>
            35 sats
          </div>

          {/* Upvotes */}
          <div className="flex items-center hover:underline cursor-pointer">
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

      <div className="py-1 flex items-center shrink-0 basis-1/3">
        {/* User Avatar */}
        <img
          className="w-10 h-10 rounded-full mx-2"
          width={10}
          height={10}
          src={author.picture || "/avatar.png"}
          alt=""
        />
        {/* Post details*/}
        <div className="">
          <div className="text-xs text-gray-500 dark:text-gray-400 font-bold hover:underline cursor-pointer">
            by: <span className="txt-color">{author.name}</span>
          </div>
          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">
            created <span>{getRelativeTime(postDetails?.createdAt!)}</span>
          </div>
        </div>
      </div>
    </li>
  );
}
