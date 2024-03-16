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

import { Button, OutlineButton, RoundButton } from "@/ui/buttons";
import { ThumbsUpIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-4 flex flex-col items-center pt-12">
      <div className="bg-surface1 w-36 h-36" />
      <div className="bg-surface2 w-36 h-36" />
      <div className="bg-surface3 w-36 h-36" />

      <Button>primary</Button>
      <Button variant="error">error</Button>
      <Button variant="success">success</Button>
      <Button variant="warn">warn</Button>
      <Button variant="info">info</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="ghost">ghost</Button>

      <RoundButton>
        <ThumbsUpIcon className="w-5 h-5" />
      </RoundButton>
      <RoundButton variant="error">
        <ThumbsUpIcon className="w-5 h-5" />
      </RoundButton>
      <RoundButton variant="warn">
        <ThumbsUpIcon className="w-5 h-5" />
      </RoundButton>
      <RoundButton variant="ghost">
        <ThumbsUpIcon className="w-5 h-5" />
      </RoundButton>

      <OutlineButton variant="success">success</OutlineButton>
      <OutlineButton variant="error">error</OutlineButton>
      <OutlineButton>ghost</OutlineButton>
      <OutlineButton variant="warn">warn</OutlineButton>
      <OutlineButton variant="primary">primary</OutlineButton>
    </div>
  );
}
