/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of Hackr News.
 *
 * Hackr News is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Hackr News is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Hackr News. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * chris.machine@pm.me
 */

"use server";

import { kinds } from "nostr-tools";
import { DEFAULT_RELAYS, pool } from "../nostr";
import { cookies } from "next/headers";

export type Profile = {
  relay: string;
  displayName?: string;
  name?: string;
  picture?: string;
  banner?: string;
  about?: string;
  website?: string;
  // readable address
  lud06?: string;
  // mess of chars
  lud16?: string;
  publickey?: string;
};

export async function retrieveProfile(publickey: string) {
  const profiles: Profile[] = [];

  // TODO: get cookie with prefered relays.
  // or maybe use sql to store.
  try {
    for (const relay of DEFAULT_RELAYS) {
      const filter = {
        kinds: [kinds.Metadata],
        authors: [publickey],
      };
      const event = await pool.querySync([relay], filter);
      const json = JSON.parse(event[0].content);

      const profile: Profile = {
        relay,
        publickey,
        name: json.name,
        displayName: json.display_name,
        picture: json.picture,
        banner: json.banner,
        about: json.about,
        website: json.website,
        lud06: json.lud06,
        lud16: json.lud16,
      };
      profiles.push(profile);
    }
  } catch (error) {
    // TODO: handle error properly
    console.error("There was an error while loggin in -> ", error);
  } finally {
    // TODO: use next-auth to store the profiles object here
    const cookieStore = cookies();
    cookieStore.set("profiles", JSON.stringify(profiles));
    return profiles;
  }
}
