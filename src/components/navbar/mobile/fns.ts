import styles from './styles.module.css'

const preventMobileScrollListener = (e: TouchEvent) => {
    e.preventDefault();
}

export const toggleScroll = (scroll: boolean) => {
    if (scroll) {
        document.body.style.overflowY = "auto";
        document.body.addEventListener('touchmove', preventMobileScrollListener, { passive: false })
        return
    }
    document.body.style.overflowY = "hidden";
    document.body.removeEventListener('touchmove', preventMobileScrollListener)
}

export const openHandler = (ref: React.RefObject<HTMLDialogElement>) => {
    toggleScroll(true)
    ref.current?.showModal();
}

export const closeHandler = (ref: React.RefObject<HTMLDialogElement>) => {
    toggleScroll(false)
    ref.current?.classList.add(styles.slideOut);
    ref.current!.onanimationend = (e) => {
        if (e.animationName === styles['slide-out']) {
            ref.current?.close();
            e.stopPropagation();
            ref.current?.classList.remove(styles.slideOut);
        }
    }
}

