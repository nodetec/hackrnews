import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--color-primary)/ <alpha-value>)",
                secondary: "rgb(var(--color-secondary)/ <alpha-value>)",
                warn: "rgb(var(--color-warn)/ <alpha-value>)",
                error: "rgb(var(--color-error)/ <alpha-value>)",
                info: "rgb(var(--color-info)/ <alpha-value>)",
                success: "rgb(var(--color-success)/ <alpha-value>)",
                surface1: "rgb(var(--surface-1)/ <alpha-value>)",
                surface2: "rgb(var(--surface-2)/ <alpha-value>)",
                surface3: "rgb(var(--surface-3)/ <alpha-value>)",
                background: "rgb(var(--background-color)/ <alpha-value>)",
                textColor: "rgb(var(--text-color)/ <alpha-value>)",
                discreetText: "rgb(var(--discreet-text)/ <alpha-value>)",
            },
        },
    },
    variants: {
        extend: {
            opacity: ['open'],
            translate: ['open'],
            transitionProperty: ['open'],
            transitionDuration: ['open'],
            transitionTimingFunction: ['open'],
        },
    },
    plugins: [],
};
export default config;
