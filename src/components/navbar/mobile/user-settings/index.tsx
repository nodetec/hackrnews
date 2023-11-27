import { Button, RoundButton } from '@/components/buttons';
import { closeHandler, openHandler } from '@/components/navbar/fns';
import { ArrowLeftIcon, Settings2Icon } from 'lucide-react';
import React from 'react';
import { twJoin } from 'tailwind-merge';
import styles from '@/components/navbar/styles.module.css';
import ThemeSelect from './theme-select';

export default function MobileSettings() {
    const dialog = React.useRef<HTMLDialogElement>(null);
    const openFn = openHandler.bind(null, dialog, false)
    const closeFn = closeHandler.bind(null, dialog, false)

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
                    <ThemeSelect />
                </div>
            </dialog>
        </>
    );
}

