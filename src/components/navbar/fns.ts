import styles from './styles.module.css'

const preventMobileScrollListener = (e: TouchEvent) => {
    e.preventDefault();
}

function toggleScroll(scroll: boolean) {
    if (scroll) {
        document.body.style.overflowY = "hidden";
        document.body.addEventListener('touchmove', preventMobileScrollListener, { passive: false })
        return
    }
    document.body.style.overflowY = "auto";
    document.body.removeEventListener('touchmove', preventMobileScrollListener)
}

export function openHandler(ref: React.RefObject<HTMLDialogElement>, scroll: boolean) {
    if (scroll) toggleScroll(true)
    ref.current?.showModal();
}

export function closeHandler(ref: React.RefObject<HTMLDialogElement>, scroll: boolean) {
    if (scroll) toggleScroll(false)
    ref.current?.classList.add(styles.slideOut);
    ref.current!.onanimationend = (e) => {
        if (e.animationName === styles['slide-out']) {
            ref.current?.close();
            e.stopPropagation();
            ref.current?.classList.remove(styles.slideOut);
        }
    }
}


// CLIENT COOKIE
function setCookieTheme(theme: string) {
    let date = new Date();
    date.setMonth(date.getMonth() + 6);
    document.cookie = `theme=${theme}; expires=${date.toUTCString()}; path=/`;
}

export function handleThemeChange(theme: string) {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const setSysTheme = (e: MediaQueryListEvent) => {
        const sysTheme = e.matches ? "dark" : "light";
        document.documentElement.className = sysTheme
        setCookieTheme('system');
    }

    if (theme === 'system') {
        darkModeMediaQuery.addEventListener('change', setSysTheme);
        setSysTheme({ matches: darkModeMediaQuery.matches } as MediaQueryListEvent);
        return
    }
    darkModeMediaQuery.removeEventListener('change', setSysTheme);
    document.documentElement.className = theme;
    setCookieTheme(theme);
}

export function getCookie(name: string) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(name + '=') === 0) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

