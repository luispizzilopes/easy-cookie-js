import { cookieType } from "../types/cookieType";
import factoryAddStringCookie from "../utils/factoryAddStringCookie";

export default function addCookie(cookie: cookieType) {
    const cookieString = factoryAddStringCookie(cookie); 

    document.cookie = cookieString;
}