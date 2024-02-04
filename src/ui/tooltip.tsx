import React from "react";
import * as RdxTooltip from "@radix-ui/react-tooltip";

type PropsType = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export default function TooltipDemo({ trigger, children }: PropsType) {
  return (
    <RdxTooltip.Provider delayDuration={200}>
      <RdxTooltip.Root>
        <RdxTooltip.Trigger asChild>{trigger}</RdxTooltip.Trigger>
        <RdxTooltip.Portal>
          <RdxTooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade z-[999]
            data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade 
            data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade 
            data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 
            select-none rounded-[4px] bg-surface2 px-[15px] py-[10px] text-[15px] leading-none 
            shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]
            will-change-[transform,opacity]"
            sideOffset={5}
          >
            {children}
            <RdxTooltip.Arrow className="fill-surface2" />
          </RdxTooltip.Content>
        </RdxTooltip.Portal>
      </RdxTooltip.Root>
    </RdxTooltip.Provider>
  );
}
