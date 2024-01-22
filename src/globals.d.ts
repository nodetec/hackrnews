import { Event } from "nostr-tools";

declare global {
  type NostrEvent = Event;
}
