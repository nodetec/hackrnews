import styles from "@components/navbar/styles.module.css";
import { toggleScroll } from "./scroll";

export function openHandler(id: string, scroll: boolean) {
  if (scroll) toggleScroll(true);
  const dialog = document.getElementById(id) as HTMLDialogElement;
  dialog.showModal();
  dialog.scrollTo(0, 0);
}

/**
 * Closes the dialog and restore the scroll
 * @param {string} id - id of the dialog to close
 * @param {boolean} scroll - if the scroll should be restored
 */
export function closeHandler(id: string, scroll: boolean) {
  if (scroll) toggleScroll(false);
  const dialog = document.getElementById(id) as HTMLDialogElement;
  dialog.classList.add(styles.slideOut);

  dialog.onanimationend = (e) => {
    if (e.animationName === styles["slide-out"]) {
      dialog.close();
      e.stopPropagation();
      dialog.classList.remove(styles.slideOut);
    }
  };
}
