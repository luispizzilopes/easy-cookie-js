import { messagesData } from "../data/messagesData";
import { cookieType } from "../types/cookieType";
import factoryAddStringCookie from "../utils/factoryAddStringCookie";
import verifyCookie from "../utils/verifyCookie";

export default function addCookie(cookie: cookieType) : boolean {
    if(verifyCookie(cookie.name)){
        console.warn(messagesData.cookie_exists); 

        return false; 
    }

    const cookieString = factoryAddStringCookie(cookie); 
    document.cookie = cookieString;
    return true;
}