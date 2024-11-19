import { messagesData } from "../data/messagesData";
import regularExpressionCookie from "../utils/regularExpressionCookie";
import verifyCookie from "../utils/verifyCookie";

export default function getObjectCookie<T>(name: string): T | null {
    if(!verifyCookie(name)){
        console.warn(messagesData.cookie_not_exists); 

        return null; 
    }

    const match = document.cookie.match(regularExpressionCookie(name));
    return match ? JSON.parse(match[2]) : null;
}
