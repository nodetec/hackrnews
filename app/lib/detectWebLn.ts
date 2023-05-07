export async function detectWebLNProvider(timeoutParam? : number) : Promise<Window["webln"] | null> {
  const timeout = timeoutParam ?? 3000;
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

