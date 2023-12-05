export function addCookie(name: string, value: string, days = 360) {
	let expires = "";
	if (days) {
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = "; expires=" + date.toUTCString();
	}
	document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// export function removeCookie(name: string) {
//     addCookie(name, "", -1);
// }
