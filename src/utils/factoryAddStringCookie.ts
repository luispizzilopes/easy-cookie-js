import { cookieType } from "../types/cookieType";
import expireStringCookie from "./expiresStringCookie";

export default function factoryAddStringCookie(cookie: cookieType) : string{
    const expires = expireStringCookie(cookie); 

    const cookieString =
        `${cookie.name}=${cookie.value}; domain=${cookie.domain}; path=${cookie.path}${expires}${cookie.httpOnly ? "; HttpOnly" : ""}`;

    return cookieString; 
}