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

import displayTags from "@/components/display-tags";
import { ArticleCardProps } from "..";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Body(props: ArticleCardProps) {
  return (
    <div className="mt-2.5 space-y-3">
      <h3 className="line-clamp-3 text-justify lg:text-left text-lg">
        {props.title}
      </h3>

      <Link href={"#"} className="text line-clamp-1 text-link">
        <LinkIcon className="w-3.5 h-3.5 inline-block mr-1" />
        {props.relay}
      </Link>
      {props.tags && props.tags.length > 0 && (
        <div className="flex justify-end gap-1 pr-8">
          {displayTags(props.tags, 3)}
        </div>
      )}
    </div>
  );
}
