"use client";

import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type ImageAvatarProps = {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
};

export default function ImageAvatar(props: ImageAvatarProps) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <Image
      src={hasError ? props.fallbackSrc ?? props.src : props.src}
      alt={props.alt}
      onError={() => setHasError(true)}
      width={50}
      height={50}
      className={twMerge("w-8 h-8 rounded-full", props.className)}
    />
  );
}
