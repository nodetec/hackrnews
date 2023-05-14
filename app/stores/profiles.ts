import { create } from "zustand";
import { useRelays } from "./relays";
import { Event } from "nostr-tools";

export interface ProfilesState {
  // FIXME: idk what is the correct type
  profiles: any;

  setProfiles: (newProfiles: string[]) => void;

  addProfiles: (newProfiles: string[]) => void;

  reload: boolean;

  setReload: (isReload: boolean) => void;
}

export const useProfiles = create<ProfilesState>((set) => ({
  profiles: [],

  setProfiles: (profiles) => {
    return set({ profiles: profiles });
  },

  addProfiles: async (pubkeys: string[]) => {
    const { relayUrl, subscribe } = useRelays.getState();

    if (!relayUrl) return;

    let relayName = relayUrl.replace("wss://", "");

    const filter = {
      kinds: [0],
      authors: pubkeys,
    };

    let events: Event[] = [];

    const onEvent = (event: Event) => {
      events.push(event);
    };

    const onEOSE = () => {
      const { profiles, setProfiles, setReload, reload } =
        useProfiles.getState();
      if (events.length !== 0) {
        events.forEach((event) => {
          let profileKey = `profile_${relayName}_${event.pubkey}`;
          profiles[profileKey] = event;
          const newProfiles = profiles;
          setProfiles(newProfiles);
          setReload(!reload);
        });
      }
    };

    subscribe([relayUrl], filter, onEvent, onEOSE);
  },

  reload: false,

  setReload: (isReload) => {
    return set({ reload: isReload });
  },
}));
