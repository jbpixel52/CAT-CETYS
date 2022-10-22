type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
/**
 *
 * Fetches the JSON version of a request
 * @export
 * @param {string} url URL of request
 * @param {Method} method type of method to use for the request (CRUD)
 * @return {* JSON object of the request response}
 */
export default async function fetcher(url: string, method: Method): Promise<any> {
    try {
        fetch(url, {
            method: method
        }).then(res => {
            return res.json();
        })
    } catch (error) {
        console.log(error);
    }


}
