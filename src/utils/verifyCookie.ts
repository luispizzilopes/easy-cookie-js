import regularExpressionCookie from "./regularExpressionCookie";

export default function verifyCookie(name: string) : boolean{
    const match = document.cookie.match(regularExpressionCookie(name));
    return match ? true : false;
}