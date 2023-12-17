"use client";

import { useTheme } from "@utils/hooks/theme";
import React from "react";

export default function ThemeInput({ themeName }: { themeName: string }) {
  const { theme, toggleTheme } = useTheme();
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    ref.current!.checked = theme.name === themeName;
  }, [theme.name, themeName]);

  return (
    <input
      onChange={() => {
        toggleTheme(themeName);
      }}
      ref={ref}
      className="appearance-none"
      type="radio"
      id={themeName}
      name="theme"
      value={themeName}
    />
  );
}
