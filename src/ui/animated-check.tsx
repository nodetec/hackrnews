/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of Hackr News.
 *
 * Hackr News is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Hackr News is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Hackr News. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * chris.machine@pm.me
 */

"use client";

import {
  DotLottiePlayer,
  PlayMode,
  type DotLottieCommonPlayer,
} from "@dotlottie/react-player";
import React from "react";

type Props = {
  className?: string;
} & Partial<DotLottieCommonPlayer>

export type ExtendedRef = {
  animateCheckOnClick: () => void;
} & DotLottieCommonPlayer;

const CheckAnimation = React.forwardRef(function CheckAnimation(
  props: Props,
  ref,
) {
  const animationRef = React.useRef<ExtendedRef | null>(null);

  React.useImperativeHandle(
    ref,
    () => {
      return {
        animateCheckOnClick() {
          const animationStatus = animationRef.current?.getState();

          if (
            animationStatus?.currentState === "playing" ||
            animationStatus?.currentState === "completed"
          ) {
            animationRef.current?.stop();
            animationRef.current?.play();
          }
          animationRef.current?.play();
        },
      };
    },
    [],
  );

  return (
    <DotLottiePlayer
      {...props}
      src={"/check_animation.json"}
      playMode={PlayMode.Bounce}
      background="transparent"
      ref={animationRef}
    />
  );
});

export default CheckAnimation;
