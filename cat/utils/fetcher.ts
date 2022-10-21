type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
/**
 *
 * Fetches the JSON version of a request
 * @export
 * @param {string} url URL of request
 * @param {Method} method type of method to use for the request (CRUD)
 * @return {* json} 
 */

export default async function fetchJSON(url: string, method: Method) {
    try {
        const res = await fetch(url, {
            method: method
        });
        const json = await res.json();
        return json;
    } catch (error) {
        console.log(error);
    }

}

