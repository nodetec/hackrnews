import { Event } from "nostr-tools";

declare global {
  type NostrEvent = Event;

  interface Window {
    webln?: any;
    nostr?: any;
  }
  // declare const webln: any;
  // declare const nostr: any;
}
