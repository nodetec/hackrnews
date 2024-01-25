import React from "react";
import { twJoin } from "tailwind-merge";
import LayoutInput from "./layout-input";
import { layoutType } from "@utils/prefered-layouts";
import { cookies } from "next/headers";

export default function PreferedLayout() {
  // const currSelected = cookies().get("layout")?.value ?? "wide"

  return (
    <div>
      <fieldset>
        <legend className="text-md mb-2">Layout</legend>
        <div className="space-y-4">
          {layoutType.map((layout) => (
            <label
              key={layout.name}
              htmlFor={layout.name}
              className={twJoin(
                "w-full inline-flex flex-col justify-start",
                "bg-surface1 shadow cursor-pointer select-none",
                "p-4 rounded-lg",
                "focus-within:ring-2 ring-primary hover:bg-primary/5",
                //Checked styles
                "[&:has(input:checked)]:bg-primary/20",
              )}
            >
              <span className="text-sm mb-2">{layout.name}</span>
              {layout.skeleton}
              <LayoutInput currSelected={currSelected} option={layout.name} />
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
