import verifyCookie from "../utils/verifyCookie";
import { messagesData } from "../data/messagesData";
import { cookieType } from "../types/cookieType";
import factoryAddStringCookie from "../utils/factoryAddStringCookie";

export default function addObjectCookie<T>(object: T, cookie: cookieType) : boolean{
    if(verifyCookie(cookie.name)){
        console.warn(messagesData.cookie_exists); 

        return false; 
    }

    cookie.value = JSON.stringify(object); 
    const cookieString = factoryAddStringCookie(cookie); 
    document.cookie = cookieString;
    return true;
}