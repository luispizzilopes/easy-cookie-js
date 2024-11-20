import { messagesData } from "../data/messagesData";
import verifyCookie from "../utils/verifyCookie";

export default function expirationTimeCookie(name: string): number {
    if (!verifyCookie(name)) {
        console.warn(messagesData.cookie_not_exists);
        return -1;
    }

    const cookieParts = document.cookie.split(";").find(cookie => cookie.trim().startsWith(`${name}=`));
    if (!cookieParts) {
        console.warn(messagesData.cookie_invalid_format);
        return -1;
    }

    const cookieAttributes = cookieParts.split(";");
    const expiresAttribute = cookieAttributes.find(attr => attr.trim().startsWith("expires="));

    if (!expiresAttribute) {
        console.warn(messagesData.cookie_no_expiration);
        return -1;
    }

    const expirationDate = new Date(expiresAttribute.split("=")[1]);

    if (isNaN(expirationDate.getTime())) {
        console.warn(messagesData.cookie_invalid_date);
        return -1;
    }

    const currentTime = new Date().getTime();
    const timeRemaining = expirationDate.getTime() - currentTime;

    return timeRemaining;
}
