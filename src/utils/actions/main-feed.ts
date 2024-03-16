/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of HackrNews.
 *
 * HackrNews is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HackrNews is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HackrNews. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * luis..f.carvalho20+hackrnews@gmail.com
 */

import { DEFAULT_RELAYS, pool } from "../nostr";

// FIXME: Tis won't work because nextjs team it's all about functional bros.
// even though fking js is not the language for that. -> convert this to function
const FILTERS = [{ kinds: [1070], limit: 3 }];

export default class Feed {
  private posts: NostrEvent[] = [];
  private eventIds: Set<string> = new Set();

  // TODO: add dates so in the future I can just use this fn to get more feed from the last point
  private lastEventDate: number = 0;

  public getFeed(): Promise<NostrEvent[]> {
    // are those pointers?
    const posts = this.posts;
    const eventIds = this.eventIds;

    return new Promise((resolve) => {
      const sub = pool.subscribeMany(DEFAULT_RELAYS, FILTERS, {
        onevent(event) {
          // console.dir(event);
          //TODO: create a new Set() that stores the event id and compares against the incoming event:
          // then if it's not in the set, add it to the feed Array
          if (!eventIds.has(event.id)) {
            eventIds.add(event.id);
            posts.push(event);
          }
          // posts.push(event);
        },
        oneose() {
          // console.log("closing");
          resolve(posts);
          sub.close();
        },
      });
    });
  }

  tesFeed() {
    console.log("posts", this.posts);
    console.log("eventIds", this.eventIds);
  }
}
