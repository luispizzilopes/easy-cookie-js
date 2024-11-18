import regularExpressionCookie from "../utils/regularExpressionCookie";

export default function getCookie(name: string): string | null {
    const match = document.cookie.match(regularExpressionCookie(name));
    return match ? match[2] : null;
}
