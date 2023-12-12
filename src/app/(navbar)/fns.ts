import { addCookie } from "@/utils/cookies";
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

export function handleThemeToggle(theme: string) {
	document.documentElement.dataset.mode = theme;

	const themeListener = (e: MediaQueryListEvent | MediaQueryList) => {
		if (e.matches) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

	switch (theme) {
		case "system":
			themeListener(prefersDark);
			prefersDark.addEventListener("change", themeListener);
			addCookie("theme", "system");
			break;
		case "dark":
			prefersDark.removeEventListener("change", themeListener);
			document.documentElement.classList.add("dark");
			addCookie("theme", "dark");
			break;
		case "light":
			prefersDark.removeEventListener("change", themeListener);
			document.documentElement.classList.remove("dark");
			addCookie("theme", "light");
			break;
	}
}
