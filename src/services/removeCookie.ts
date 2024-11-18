import factoryRemoveStringCookie from "../utils/factoryRemoveStringCookie";

export default function removeCookie(name: string) {
    const removeCookieString = factoryRemoveStringCookie(name); 

    document.cookie = removeCookieString;
}