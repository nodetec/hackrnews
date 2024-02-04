// steak overflow copium
// https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900

/**
 * Formats a number with a specified number of decimal places.
 *
 * @param num - The number to format.
 * @param digits - number of decimal places to include.
 * @returns The formatted number.
 */
export function nFormatter(num: number, digits = 1) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}

/**
 * Checks if the user is on mobile
 */
export function isMobile() {
  // This below is great but only if I wanna know the type of device, in this case I just want
  // to know if the size is mobile alike
  // const regex =
  //   /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  // return regex.test(navigator.userAgent);

  return window.matchMedia("(max-width: 1024px)").matches;
}

export function toggleScroll(scroll: boolean) {
  if (scroll) {
    document.body.style.overflowY = "hidden";
    document.body.addEventListener("touchmove", preventMobileScrollListener, {
      passive: false,
    });
    return;
  }
  document.body.style.overflowY = "auto";
  document.body.removeEventListener("touchmove", preventMobileScrollListener);
}

/**
 * Prevents mobile scrolling
 * @param e - touch event
 */
export const preventMobileScrollListener = (e: TouchEvent) => {
  e.preventDefault();
};

export function closeOnScreenSize(stateToggler: () => void) {
  const listener = () => {
    if (window.matchMedia("(max-width: 1024px)").matches) {
      stateToggler();
    }
  };
  window.addEventListener("resize", listener);

  return () => {
    window.removeEventListener("resize", listener);
  };
}
