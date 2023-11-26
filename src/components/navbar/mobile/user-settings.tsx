import { Button, RoundButton } from '@/components/buttons';
import { ArrowLeftIcon, Settings2Icon, SunIcon } from 'lucide-react';
import React from 'react'
import { twJoin } from 'tailwind-merge';
import styles from './styles.module.css';
import anime from 'animejs';

const preventMobileScrollListener = (e: TouchEvent) => {
    e.preventDefault();
}

const toggleScroll = (scroll: boolean) => {
    if (scroll) {
        document.body.style.overflowY = "auto";
        document.body.addEventListener('touchmove', preventMobileScrollListener, { passive: false })
        return
    }
    document.body.style.overflowY = "hidden";
    document.body.removeEventListener('touchmove', preventMobileScrollListener)
}

export default function MobileSettings() {
    const dialog = React.useRef<HTMLDialogElement>(null);

    const openHandler = () => {
        toggleScroll(true)
        dialog.current?.showModal();
        const backdrop = document.createElement('div');
        backdrop.id = 'backdrop';
        document.body.appendChild(backdrop);
        backdrop.className = "fixed top-0 left-0 w-full h-full bg-black/50 z-10 ";

        anime({
            targets: ['#mobile-settings'],
            translateX: ['100vh', 0],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutElastic(1, 1.3)',
        })
        anime({
            targets: '#backdrop',
            opacity: [0, 1],
            duration: 300,
        })
    }

    const closeHandler = () => {
        toggleScroll(false)
        anime({
            targets: '#mobile-settings',
            translateX: [0, '100vh'],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInElastic(1, 1.3)',
            complete: () => {
                dialog.current?.close();
            }
        })
    }

    return (
        <>
            <Button
                className="justify-start gap-3"
                flat
                onClick={openHandler}>
                <Settings2Icon className="w-5 h-5" />
                Settings
            </Button>

            <dialog
                id="mobile-settings"
                ref={dialog}
                data-dialog="mobile-settings"
                aria-modal
                className={twJoin(
                    "rounded-3xl p-4 bg-background w-full h-full text-textColor",
                    "space-y-4 backdrop:blur-md backdrop:bg-black/50 backdrop:w-full backdrop:h-full",
                    "translate-x-[100vw]",
                    "backdrop:opacity-0 ",
                )}
            >
                {/* Close Button */}
                <RoundButton
                    flat
                    onClick={closeHandler}
                >
                    <ArrowLeftIcon />
                </RoundButton>

                <div className="py-2 px-4">
                    {/* Theme */}
                    <label htmlFor="theme-btn" className="text-xl">
                        Preferred Theme
                    </label>
                    <div
                        className={twJoin(
                            "flex items-center gap-2 p-2 bg-surface3 rounded-lg",
                            "focus-within:ring-2 ring-primary",
                        )}
                    >
                        <SunIcon className="w-5 h-5" />
                        <select
                            name="theme-btn"
                            className={twJoin("w-ful bg-inherit flex-grow", "outline-none")}
                            onChange={(e) => {
                                console.log("newState", e.target.value);
                            }}
                            defaultValue={"light"}
                        >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="system">System</option>
                        </select>
                    </div>

                    <button
                        className="transform hover:translate-x-20 hover:translate-y-20 transition duration-500 ease-in-out bg-teal-400 text-white font-bold py-2 px-4 rounded-lg">
                        Translate Me 5rem
                    </button>

                </div>
            </dialog>
        </>
    );
}
