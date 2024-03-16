/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of HackrNews.
 *
 * HackrNews is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HackrNews is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HackrNews. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * luis..f.carvalho20+hackrnews@gmail.com
 */

import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // fontSize: {
    //   sm: "var(--font-size-sm)",
    //   base: "var(--font-size-base)",
    //   md: "var(--font-size-md)",
    //   lg: "var(--font-size-lg)",
    //   xl: "var(--font-size-xl)",
    //   "2xl": "var(--font-size-xxl)",
    //   "3xl": "var(--font-size-xxxl)",
    // },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      screens: {
        tall: { raw: "(min-height: 800px)" },
        // => @media (min-height: 800px) { ... }
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out",
        slideDownAndFade:
          "slideDownAndFade 600ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 600ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 600ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
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
        subText: "rgb(var(--sub-text)/ <alpha-value>)",
        discreetText: "rgb(var(--discreet-text)/ <alpha-value>)",
        link: colors.blue[400],
      },
    },
  },
  // variants: {
  //   extend: {
  //     opacity: ["open"],
  //     translate: ["open"],
  //     transitionProperty: ["open"],
  //     transitionDuration: ["open"],
  //     transitionTimingFunction: ["open"],
  //   },
  // },
  plugins: [],
};
export default config;
