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
  // below is to detect the type of device
  // const regex =
  //   /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  // return regex.test(navigator.userAgent);
  return window.matchMedia("(max-width: 1024px)").matches;
}

/** if it should block scroll or not
 * @param scroll - boolean
 */
export function lockScroll(scroll: boolean) {
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

/**
 * Closes the drawer on screen size
 * @param stateToggler - function to toggle the state
 * @returns
 *
 */
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
