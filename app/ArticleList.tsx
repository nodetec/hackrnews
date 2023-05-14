"use client";

import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Article from "./components/ArticleCard/Article";
import { userStore } from "./stores/user";
import { useRelays } from "@/app/stores/relays";
import { useProfiles } from "@/app/stores/profiles";

export default function ArticleList() {
  const { subscribe, relayUrl, activeRelay } = useRelays((state) => state);
  const { addProfiles } = useProfiles();

  const [events, setEvents] = useState<any[]>([]);
  const [loading, isLoading] = useState<boolean>(false);

  const pubkey = userStore((state: any) => state.pubkey);

  const loader = () => {
    isLoading(true);
    setTimeout(() => isLoading(false), 3000);
  };

  const getEvents = () => {
    let pubkeysSet = new Set<string>();

    const filter = {
      kinds: [30023],
      limit: 10,
    };

    let newEvents: any[] = [];

    const onEvent = (event: any) => {
      pubkeysSet.add(event.pubkey);
      newEvents.push(event);
    };

    const onEOSE = () => {
      if (pubkeysSet.size > 0) {
        addProfiles(Array.from(pubkeysSet));
      }
      setEvents(newEvents);
    };

    subscribe([relayUrl], filter, onEvent, onEOSE);
  };

  useEffect(() => {
    getEvents();
  }, [relayUrl, activeRelay]);

  return (
    <>
      {/* Posts list */}
      <ul className="space-y-2">
        {/* <div>{pubkey}</div> */}
        {events.map((event: any, index: number) => {
          return <Article key={event.id} event={event} index={index} />;
        })}
      </ul>

      {/* Load more button */}
      <button
        onClick={loader}
        className="fill-button my-5 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:active:bg-primary"
        disabled={loading}
      >
        <ArrowPathIcon className={`h-5 w-5 ${loading && "animate-spin"}`} />
        load more
      </button>
    </>
  );
}
