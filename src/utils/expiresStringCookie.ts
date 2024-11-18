import { cookieType } from "../types/cookieType";

export default function expireStringCookie(cookie: cookieType) : string{
    const expires = cookie.expirateDate ? `expires=${cookie.expirateDate.toUTCString()}` : "";

    return expires; 
}