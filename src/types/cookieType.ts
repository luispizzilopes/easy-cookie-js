export type cookieType = {
    name: string, 
    value: string, 
    domain: string, 
    path: string, 
    expirateDate?: Date,
    httpOnly: boolean,  
}; 