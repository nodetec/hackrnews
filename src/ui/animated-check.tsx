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
