export async function detectWebLNProvider(timeoutParam?: number) {
  const timeout = timeoutParam ?? 3000;
  const interval = 100;
  let handled = false;

  return new Promise((resolve) => {
    if (window.webln) {
      handleWebLN();
    } else {
      document.addEventListener("webln:ready", handleWebLN, { once: true });

      let i = 0;
      const checkInterval = setInterval(function () {
        if (window.webln || i >= timeout / interval) {
          handleWebLN();
          clearInterval(checkInterval);
        }
        i++;
      }, interval);
    }

    function handleWebLN() {
      if (handled) {
        return;
      }
      handled = true;

      document.removeEventListener("webln:ready", handleWebLN);

      if (window.webln) {
        resolve(window.webln);
      } else {
        resolve(null);
      }
    }
  });
}
