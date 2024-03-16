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
import Image from 'next/image';
import { ArticleCardProps } from "..";

export default function Author(props: ArticleCardProps) {
  return (
    <div className="flex items-center gap-2 mt-2">
      <Image
        alt={"avatar of " + props.author}
        width={30}
        height={30}
        className="rounded-full"
        src={
          "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" +
          props.author.split(" ").join("+")
        }
      />

      {/* TODO: Search how to align vertically text with tailwind ... */}
      <span className="text-secondary font-bold whitespace-nowrap">
        {props.author}
      </span>
    </div>
  );
}
