import { cookies } from "next/headers";

export function getThemeCookie(): string {
	const cookie = cookies().get("theme");
	if (cookie) {
		return cookie.value;
	}

	return "system";
}
