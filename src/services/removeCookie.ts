import { messagesData } from "../data/messagesData";
import { removeCookiePropsType } from "../types/removeCookiePropsType";
import factoryRemoveStringCookie from "../utils/factoryRemoveStringCookie";
import verifyCookie from "../utils/verifyCookie";

export default function removeCookie(name: string, props?: removeCookiePropsType) : boolean {
    if (!verifyCookie(name)) {
        console.warn(messagesData.cookie_not_exists);

        return false;
    }

    const removeCookieString = factoryRemoveStringCookie(name, props);
    document.cookie = removeCookieString;
    return true; 
}