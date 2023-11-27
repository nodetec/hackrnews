import { cookies } from "next/headers";

export function handleThemeCookie(): string {
    const cookie = cookies().get("theme");
    if (cookie) {
        return cookie.value
    }
    const date = new Date();
    date.setMonth(date.getMonth() + 6);
    cookies().set("theme", "light", {
        path: "/",
        expires: date
    })
    return "system"
}

