"use client";

import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";
import Article from "./components/ArticleCard/Article";
import { RelayContext } from "./context/relay-provider";
import { ProfilesContext } from "@/app/context/profiles-provider";

export default function ArticleList() {
  const { subscribe, relayUrl, activeRelay } = useContext(RelayContext);
  // @ts-ignore
  const { addProfiles } = useContext(ProfilesContext);

  const [events, setEvents] = useState<any[]>([]);
  const [loading, isLoading] = useState<boolean>(false);

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
        {events.map((event: any, index: number) => {
          return <Article key={event.id} event={event} index={index} />;
        })}

      </ul>

      {/* Load more button */}
      <button
        onClick={loader}
        className="fill-button my-5 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:active:bg-primary"
        disabled={loading}>
        <ArrowPathIcon className={`h-5 w-5 ${loading && "animate-spin"}`} />
        load more
      </button>
    </>
  );
}
