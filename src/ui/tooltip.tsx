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

import React from "react";
import * as RdxTooltip from "@radix-ui/react-tooltip";

type PropsType = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export default function Tooltip({ trigger, children }: PropsType) {
  return (
    <RdxTooltip.Provider delayDuration={200}>
      <RdxTooltip.Root>
        <RdxTooltip.Trigger asChild>{trigger}</RdxTooltip.Trigger>
        <RdxTooltip.Portal>
          {/* TODO: use prestyled instead */}
          <RdxTooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade z-[999]
            data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade 
            data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade 
            data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade 
            select-none rounded-[4px] bg-surface2 px-[15px] py-[10px] text-[15px] leading-none 
            shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]
            will-change-[transform,opacity]"
            sideOffset={8}
            side="top"
          >
            {children}
            <RdxTooltip.Arrow className="fill-surface2" />
          </RdxTooltip.Content>
        </RdxTooltip.Portal>
      </RdxTooltip.Root>
    </RdxTooltip.Provider>
  );
}
