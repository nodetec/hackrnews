'use client'

import { Button, OutlineButton, RoundButton } from '@/components/buttons'
import Logo from '@/components/logo';
import { LogOutIcon, User2Icon, XIcon } from 'lucide-react';
import React from 'react'
import { twJoin } from 'tailwind-merge';
import Divider from '@/components/divider';
import MenuLinks from './menu-links';
import UserSettings from './user-settings';
import styles from './styles.module.css';

const evListener = (e: TouchEvent) => {
    e.preventDefault();
}

export default function MobileMenu() {
    const dialog = React.useRef<HTMLDialogElement>(null);

    const openHandler = () => {
        // this is for mobile
        document.body.addEventListener('touchmove', evListener, { passive: false })
        // this is for scroll with mouse/trackpad
        document.body.style.overflowY = "hidden";
        dialog.current?.showModal();
    }
    const closeHandler = () => {
        document.body.removeEventListener('touchmove', evListener)
        document.body.style.overflowY = "auto";
        dialog.current?.classList.add(styles.slideOut);
        dialog.current!.onanimationend = (e) => {
            if (e.animationName === styles['slide-out']) {
                dialog.current?.close();
                e.stopPropagation();
                dialog.current?.classList.remove(styles.slideOut);
            }
        }
    }

    const animationHandler: React.AnimationEventHandler<HTMLDialogElement> = (e) => {
        // if (e.animationName === 'slide-out') {
        //     dialog.current?.close();
        //     dialog.current?.classList.remove(styles.slideOut);
        //     // this is to prevent children to close the parent
        // }
        // e.stopPropagation();
    }

    return (
        <>
            <RoundButton
                flat
                className="ring-transparent shadow-none"
                onClick={openHandler}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </RoundButton>

            <dialog
                ref={dialog}
                aria-modal
                onAnimationEnd={animationHandler}
                className={twJoin(
                    "rounded-3xl p-4 bg-background w-full h-full text-textColor",
                    "space-y-4 backdrop:bg-black/20 backdrop:backdrop-blur-md",
                    styles.slideIn
                )}
            >
                <div className="flex flex-col gap-3 h-full">
                    {/* Logo and closebtn */}
                    <div className="flex justify-between items-center">
                        <Logo />
                        <RoundButton flat onClick={closeHandler}>
                            <XIcon className="w-5 h-5" />
                        </RoundButton>
                    </div>
                    <MenuLinks closeHandler={closeHandler} />

                    <Divider />

                    {/* User Settings and Account*/}
                    <div className="flex flex-col gap-3">
                        <UserSettings />

                        <OutlineButton
                            variant="primary"
                            className="justify-start gap-3"
                            flat
                            onClick={closeHandler}
                        >
                            <User2Icon className="w-5 h-5" />
                            Accounts
                        </OutlineButton>
                    </div>

                    {/* Logout Btn */}
                    <div className="mt-auto">
                        <Button variant="error" onClick={closeHandler} flat>
                            <LogOutIcon className="w-5 h-5" />
                            Logout
                        </Button>
                    </div>
                </div>
            </dialog>
        </>
    )
}
