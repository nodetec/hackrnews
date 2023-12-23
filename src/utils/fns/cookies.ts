export function addCookie(name: string, value: string, days = 360) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function getCookie(cname: string) {
  let name = cname + "=";

  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return null;
}

export function deleteCookie(name: string) {
  addCookie(name, "", -1);
}

export function updateCookie(name: string, value: string, days = 360) {
  deleteCookie(name);
  addCookie(name, value, days);
}
