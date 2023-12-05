import styles from "./styles.module.css";

const preventMobileScrollListener = (e: TouchEvent) => {
	e.preventDefault();
};

function toggleScroll(scroll: boolean) {
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
