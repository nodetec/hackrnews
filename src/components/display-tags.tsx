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

import Pill from "@/ui/pill";

export default function displayTags(tags: string[], limit = 3) {
  let tagsRow: JSX.Element[] = [];

  for (let i = 0; i < tags.length; i++) {
    if (i === limit) {
      tagsRow.push(
        <Pill variant="ghost" key={tags[i] + i}>
          + {tags.length - limit}
        </Pill>,
      );
      break;
    }
    tagsRow.push(
      <Pill variant="primary" key={tags[i] + i}>
        #{tags[i]}
      </Pill>,
    );
  }

  return tagsRow;
}
