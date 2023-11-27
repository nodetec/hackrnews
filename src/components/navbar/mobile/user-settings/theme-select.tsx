import React from 'react'
import { twJoin } from 'tailwind-merge'
import { getCookie, handleThemeChange } from '@/components/navbar/fns'
import { themes } from '@/components/navbar/themes';
import { ChevronDownIcon } from 'lucide-react';

export default function ThemeSelect() {
    const themeSelect = React.useRef<HTMLSelectElement>(null);
    const [theme, setTheme] = React.useState(themes[0])

    React.useEffect(() => {
        const theme = getCookie('theme');
        if (theme === 'system' || theme === 'light' || theme === 'dark') {
            setTheme(themes.find((t) => t.name === theme)!);
            console.log(theme)
        }
    }, [])

    return (
        <div>

            <label htmlFor="theme-btn" className="text-xl">
                Preferred Theme
            </label>
            <div
                className={twJoin(
                    "relative bg-surface3 rounded-lg",
                    "focus-within:ring-2 ring-primary relative",
                )}
            >
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                    {theme.icon}
                </span>
                <select
                    ref={themeSelect}
                    name="theme-btn"
                    id="theme-btn"
                    className={twJoin(
                        "w-full bg-inherit flex-grow border appearance-none",
                        "outline-none pl-10 py-2.5 pr-4 rounded-lg",
                    )}
                    // defaultValue={theme.name}
                    value={theme.name}
                    onChange={(e) => {
                        handleThemeChange(e.target.value)
                        setTheme(themes.find((t) => t.name === e.target.value)!);
                    }}
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
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon className="w-5 h-5" />
                </span>
            </div>
        </div>
    )
}
