import { env } from "../config/config";

export const fetchWithOutAuth = async (route, method = 'GET', payload) => {
    
    const url = `${env.SERVER_PATH}/${route}`;

if(method === 'GET'){
    const response = await fetch(url);
    const data = await response.json();
    return data;
} else {
    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    const data = await response.json();
    return data;
}
}

