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
