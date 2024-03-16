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

import { SimplePool } from "nostr-tools";

export const DEFAULT_RELAYS = [
  "wss://relay.damus.io",
  "wss://nos.lol",
];
// export const DEFAULT_RELAYS = ["wss://relay.damus.io", "wss://nostr.nodeofsven.com", "wss://nos.lol"];

export const pool = new SimplePool();

/**
 * detect if webln is available
 * @param timeout timeout in ms
 * @returns a promise that resolves to the webln instance
 * */
async function detectWebLNProvider(
  timeout = 3000,
): Promise<Window["webln"] | null> {
  let resolved = false;

  return new Promise((resolve) => {
    const resolveOnce = (value: Window["webln"]) => {
      if (!resolved) {
        resolved = true;
        resolve(value);
      }
    };

    const handleWebLN = () => {
      resolveOnce(window.webln ? window.webln : null);
    };

    if (window.webln) {
      handleWebLN();
    } else {
      document.addEventListener("webln:ready", handleWebLN, { once: true });

      setTimeout(() => {
        handleWebLN();
      }, timeout);
    }
  });
}

/**
 * client-side function to detect if the extension is enabled
 * @returns a promise that resolves to the nostr instance
 * */
export async function getProviders() {
  const webln = await detectWebLNProvider();
  const nostr = typeof window.nostr ? window.nostr : null;

  return { webln, nostr };
}
