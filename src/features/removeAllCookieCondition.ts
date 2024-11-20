export default function removeAllCookieCondition(condition: (cookieName: string) => boolean): void {
    const cookies = document.cookie.split(";");

    cookies.forEach(cookie => {
        const cookieName = cookie.trim().split("=")[0];
        if (condition(cookieName)) {
            document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
        }
    });
}
