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

import Divider from "@ui/divider";
import Logo from "@components/logo";
import { twJoin } from "tailwind-merge";
import MenuLinks from "./menu-links";
import { cookies } from "next/headers";
import ThemeMenu from "./theme-menu";
import MobileDrawer from "./mobile-drawer";
import DesktopDrawer from "./desktop-drawer";
import Accounts from "./accounts";
import Link from "next/link";
import { OutlineButton } from "@/ui/buttons";
import { Profile } from "@/utils/actions/auth";
import { User2Icon } from "lucide-react";
import { Suspense } from "react";

export default function Navbar() {
  const isPinned = cookies().get("pinned")?.value === "true" ?? false;
  const stringProfiles = cookies().get("profiles")?.value;
  const profilesVal: Profile[] | null = stringProfiles
    ? JSON.parse(stringProfiles)
    : null;

  return (
    <>
      <nav
        className={twJoin(
          "bg-surface1 drop-shadow-md rounded-3xl p-4 px-6",
          "md:p-[1rem] md:px-[2rem] flex items-center",
          "sticky top-0 z-10 float-border",
        )}
      >
        <Logo />
        <MenuLinks />
        <div className="lg:hidden ml-auto">
          <MobileDrawer />
        </div>
        <div className={twJoin("hidden ml-auto mr-6", isPinned && "lg:block")}>
          {isPinned && <ThemeMenu />}
        </div>

        <div className="hidden gap-4 justify-center items-center lg:flex">
          {!profilesVal ? (
            <Login />
          ) : (
              // TODO: check how to do this
            <Suspense fallback={<div>Loading...</div>}>
              <Accounts profiles={profilesVal} />
            </Suspense>
          )}

          {/* <Accounts profiles={profilesVal} /> */}
          <Divider vertical />

          <DesktopDrawer />
        </div>
      </nav>
    </>
  );
}

function Login() {
  return (
    <Link href="/login">
      <OutlineButton variant="primary" className="flex -space-x-4">
        <User2Icon className="h-5 w-5" />
        Login
      </OutlineButton>
    </Link>
  );
}
