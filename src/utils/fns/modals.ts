import styles from "@components/navbar/styles.module.css";
import { toggleScroll } from "./scroll";

export function openHandler(
  ref: React.RefObject<HTMLDialogElement>,
  scroll: boolean,
) {
  if (scroll) toggleScroll(true);
  ref.current?.showModal();
}

export function closeHandler(
  ref: React.RefObject<HTMLDialogElement>,
  scroll: boolean,
) {
  if (scroll) toggleScroll(false);
  ref.current?.classList.add(styles.slideOut);

  if (ref.current) {
    ref.current.onanimationend = (e) => {
      if (e.animationName === styles["slide-out"]) {
        ref.current?.close();
        e.stopPropagation();
        ref.current?.classList.remove(styles.slideOut);
      }
    };
  }
}
