import { removeCookiePropsType } from "../types/removeCookiePropsType";
import getDomainApplication from "./getDomainApplication";

export default function factoryRemoveStringCookie(
    name: string, 
    props?: removeCookiePropsType
) : string {
    const domainApplication = getDomainApplication() ?? ""; 
    const removeCookieString = `${encodeURIComponent(name)}=; 
        expires=Thu, 01 Jan 1970 00:00:00 GMT; 
        path=${props != null && (props?.path != "" || props?.path != null) ? props?.path : "/"}; 
        domain=${props != null && (props?.domain != "" || props?.domain != null) ? props?.domain : domainApplication};`;

    return removeCookieString; 
}
