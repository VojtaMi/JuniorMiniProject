const API_URL = 'http://localhost:3333/api/contacts';
export async function sendHttpRequest(method: string, data: object | null = null, contact_id = '') {
    let api_url = API_URL;
    if (contact_id){
        api_url += `/${encodeURIComponent(contact_id)}`;
    }
    try {
        let response;
        if (data === null){
            response = await fetch(api_url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }else{
            response = await fetch(api_url, {
                method: method,
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
        
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            return response.json().then(errData => {
                console.log(errData);
                throw new Error('Something went wrong - server side')
            });
        }
    } catch (error) {
        throw(error);
    }
}