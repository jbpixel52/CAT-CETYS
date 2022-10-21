type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

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

