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
