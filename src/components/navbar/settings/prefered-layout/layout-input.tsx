"use client";

import { layoutState, Layout } from "@/stores/prefered-layout";
import React from "react";

export default function LayoutInput({
  preferedLayout,
}: {
  preferedLayout: Layout;
}) {
  const { layout, setLayout } = layoutState();
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    ref.current!.checked = layout === preferedLayout;
  }, [layout, preferedLayout]);

  return (
    <input
      onChange={() => {
        setLayout(preferedLayout);
      }}
      ref={ref}
      className="appearance-none"
      type="radio"
      id={preferedLayout}
      name="layout"
      value={preferedLayout}
    />
  );
}
