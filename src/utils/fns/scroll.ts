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

export const preventMobileScrollListener = (e: TouchEvent) => {
  e.preventDefault();
};
