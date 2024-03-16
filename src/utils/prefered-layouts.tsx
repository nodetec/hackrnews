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

export enum Layout {
  WIDE = "wide",
  COMPACT = "narrow",
}

export const layoutType = [
  {
    name: Layout.WIDE,
    skeleton: <WideSkelleton />,
  },
  {
    name: Layout.COMPACT,
    skeleton: <CompactSkelleton />,
  },
];

function CompactSkelleton() {
  return (
    <div className="flex gap-2">
      <WideSkelleton />
      <WideSkelleton />
    </div>
  );
}

function WideSkelleton() {
  return (
    <div className="space-y-1 w-full">
      <div className="bg-primary/60 h-1"></div>
      <div className="bg-discreetText/60 h-1"></div>
      <div className="bg-discreetText/60 h-1 w-3/4"></div>
    </div>
  );
}
