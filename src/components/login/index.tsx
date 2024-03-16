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

import { Button, OutlineButton } from "@ui/buttons";
import Logo from "@components/logo";
import Divider from "@ui/divider";
import {
  AlertTriangleIcon,
  HelpCircleIcon,
  LogInIcon,
  ThumbsUpIcon,
} from "lucide-react";
import PrivkeyInput from "./privkey-input";
import DangerWrapper from "@/ui/danger-wrapper";

export default function Login() {
  return (
    <div className="flex flex-col gap-10 p-6 max-w-md mx-auto">
      <Logo />

      <div className="space-y-4">
        <div className="bg-success/5 border-1 border-success px-6 py-2 rounded flex gap-2 items-center text-success">
          <ThumbsUpIcon className="w-5 h-5" />

          <h1 className="font-bold">Recomended</h1>
        </div>

        <Button variant="primary" className="w-full">
          Login with extension
          <HelpCircleIcon className="w-5 h-5 justify-self-end" />
        </Button>
      </div>
      <Divider />

      <form className="flex flex-col">
        <DangerWrapper className="mb-2 relative">
          <div className="flex gap-2 py-2 px-4 justify-between items-center">
            <AlertTriangleIcon className="w-6 h-6 fill-warn text-black" />
            <h4 className="grow font-bold">Login with private key</h4>
          </div>
        </DangerWrapper>
        <PrivkeyInput></PrivkeyInput>
        <Button 
          className="w-full bg-surface2"
          type="submit">
          <LogInIcon />
          Login
        </Button>
      </form>
    </div>
  );
}
