"use client";

import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type ImageAvatarProps = {
  src: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
};

export default function ImageAvatar(props: ImageAvatarProps) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <Image
      src={hasError ? props.fallbackSrc : props.src}
      alt={props.alt}
      onError={() => {
        console.error("failed to load image", props.src);
        setHasError(true)
      }}
      width={50}
      height={50}
      className={twMerge("w-8 h-8 rounded-full", props.className)}
    />
  );
}
