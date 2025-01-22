import { messagesData } from "../data/messagesData";
import regularExpressionCookie from "../utils/regularExpressionCookie";
import verifyCookie from "../utils/verifyCookie";

export default function getCookie(name: string): string | null {
    if(!verifyCookie(name)){
        console.warn(messagesData.cookie_not_exists); 
        return null; 
    }

    const match = document.cookie.match(regularExpressionCookie(name));
    return match ? decodeURIComponent(match[2]) : null;
}
