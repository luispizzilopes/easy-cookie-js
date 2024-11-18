export default function factoryRemoveStringCookie(name: string){
    const removeCookieString = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;

    return removeCookieString; 
}