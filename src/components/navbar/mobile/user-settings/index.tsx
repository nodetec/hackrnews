import { Button, RoundButton } from '@/components/buttons';
import { ArrowLeftIcon, Settings2Icon, SunIcon } from 'lucide-react';
import React from 'react'
import { twJoin } from 'tailwind-merge';
import styles from '../styles.module.css'
import { themes } from './themes'
import { closeHandler, openHandler } from '../fns';

export default function MobileSettings() {
    const dialog = React.useRef<HTMLDialogElement>(null);
    const themeSelect = React.useRef<HTMLSelectElement>(null);
    const openFn = openHandler.bind(null, dialog)
    const closeFn = closeHandler.bind(null, dialog)
    const [theme, setTheme] = React.useState(themes[0])

    return (
        <>
            <Button
                className="justify-start gap-3"
                flat
                onClick={openFn}>
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
                    styles.slideIn,
                )}
            >
                {/* Close Button */}
                <RoundButton
                    flat
                    onClick={closeFn}
                >
                    <ArrowLeftIcon />
                </RoundButton>

                <div >
                    {/* Theme */}
                    <label htmlFor="theme-btn" className="text-xl">
                        Preferred Theme
                    </label>
                    <div
                        className={twJoin(
                            "relative bg-surface3 rounded-lg",
                            "focus-within:ring-2 ring-primary relative",
                        )}
                    >
                        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2"> {theme.icon}
                        </span>
                        <select
                            ref={themeSelect}
                            name="theme-btn"
                            className={twJoin(
                                "w-full bg-inherit flex-grow border",
                                "outline-none pl-10 py-2.5 pr-4 rounded-lg",
                            )}
                            defaultValue={"light"}
                        >
                            {themes.map((theme) => (
                                <option
                                    key={theme.name}
                                    value={theme.name}
                                    data-icon={theme.icon}
                                >
                                    {theme.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </dialog>
        </>
    );
}

