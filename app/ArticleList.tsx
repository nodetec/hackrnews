"use client";

import { useContext, useEffect, useState } from "react";
import Article from "./Article";
import { RelayContext } from "./context/relay-provider";

export default function ArticleList() {
  const { subscribe, relayUrl, activeRelay } = useContext(RelayContext);

  const [events, setEvents] = useState<any[]>([]);

  const getEvents = () => {
    const filter = {
      kinds: [30023],
      limit: 10,
    };

    let newEvents: any[] = [];

    const onEvent = (event: any) => {
      newEvents.push(event);
    };

    const onEOSE = () => {
      setEvents(newEvents);
    };

    subscribe([relayUrl], filter, onEvent, onEOSE);
  };

  useEffect(() => {
    getEvents();
  }, [relayUrl, activeRelay]);

  return (
      <ul className="space-y-4">
        {events.map((event: any, index: number) => {
          return <Article key={event.id} event={event} index={index} />;
        })}
      </ul>
  );
}
