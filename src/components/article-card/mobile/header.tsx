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
import { ArticleCardProps } from "..";
import InfoBtn from "./info-btn";

export default function Header(props: ArticleCardProps) {
  return (
    <div className="bg-surface1 border border-surface2 flex items-center gap-4 py-1 px-2 rounded-lg h-12">
      <span className="text-lg text-primary p-1">#{props.postNr}</span>
      <span className="text-discreetText text-sm">{props.date}</span>
      <InfoBtn
        author={props.author}
        authorsImage={
          "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" +
          props.author.split(" ").join("+")
        }
        date={props.date}
        views={props.views}
      />
    </div>
  );
}
