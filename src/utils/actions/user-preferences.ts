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

"use server";

import { revalidatePath } from "next/cache";
import { cookies, headers } from "next/headers";

export async function setPreferenceCookie(
  key: string,
  value: string,
  days = 360,
) {
  cookies().set(key, value, {
    httpOnly: true,
    maxAge: days * 24 * 60 * 60 * 1000,
  });

  const path = headers().get("next-url") ?? "/";

  revalidatePath(path);
}

export async function getPreferenceCookie(key: string) {
  return cookies().get(key)?.value;
}
