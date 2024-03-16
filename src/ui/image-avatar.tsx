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
