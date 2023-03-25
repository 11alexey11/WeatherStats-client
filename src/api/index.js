export const api = {
    get: async (url) => {
        const data = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': 'localhost:3000',
                SameSite: 'None',
                Secure: true,
            },
            credentials: 'include',
            method: 'GET',
        }).then((data) => data);
        return data;
    },
    post: async (url, body) => {
        const data = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': 'localhost:3000',
                SameSite: 'None',
                Secure: true,
            },
            body: JSON.stringify(body),
            credentials: 'include',
            method: 'POST',
        })
            .then(async (response) => await response.json())
            .then((data) => data);
        return data;
    },
    put: async (url, body) => {
        const data = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': 'localhost:3000',
                SameSite: 'None',
                Secure: true,
            },
            body: JSON.stringify(body),
            credentials: 'include',
            method: 'PUT',
        }).then((data) => data);
        return data;
    },
    delete: async (url, body) => {
        const data = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': 'localhost:3000',
                SameSite: 'None',
                Secure: true,
            },
            body: JSON.stringify(body),
            credentials: 'include',
            method: 'DELETE',
        }).then((data) => data);
        return data;
    },
};
