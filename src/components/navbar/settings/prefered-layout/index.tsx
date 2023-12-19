import React from "react";
import { twJoin } from "tailwind-merge";
import LayoutInput from "./layout-input";
import { Layout } from "@/stores/prefered-layout";

export default function PreferedLayout() {
  const layoutType = [
    {
      name: Layout.COMPACT,
      skeleton: <CompactSkelleton />,
    },
    {
      name: Layout.WIDE,
      skeleton: <WideSkelleton />,
    },
  ];

  return (
    <div>
      <fieldset>
        <legend className="text-2xl mb-2">Layout</legend>
        <div className="space-y-4">
          {layoutType.map((layout) => (
            <label
              key={layout.name}
              htmlFor={layout.name}
              className={twJoin(
                "w-full inline-flex flex-col justify-start",
                "bg-surface1 shadow cursor-pointer select-none",
                "p-2 rounded-lg",
                "focus-within:ring-2 ring-primary hover:bg-primary/5",
                //Checked styles
                "[&:has(input:checked)]:bg-primary/20",
              )}
            >
              <span className="text-sm mb-1">{layout.name}</span>
              {layout.skeleton}
              <LayoutInput preferedLayout={layout.name} />
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

function CompactSkelleton() {
  return (
    <div className="flex gap-2">
      <WideSkelleton />
      <WideSkelleton />
    </div>
  );
}

function WideSkelleton() {
  return (
    <div className="space-y-1 w-full">
      <div className="bg-primary/50 h-1"></div>
      <div className="bg-discreetText/50 h-1"></div>
      <div className="bg-discreetText/50 h-1 w-3/4"></div>
    </div>
  );
}
