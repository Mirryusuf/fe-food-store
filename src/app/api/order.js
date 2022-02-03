import * as axios from 'axios';

export async function getOrders(params) {
    let { token } = localStorage.getItem('auth')
         ? JSON.parse(localStorage.getItem('auth')) : {};

    let { limit, page } = params;
    let skip = (page * limit) - limit;

    return await axios
        .get(`http://localhost:3000/api/v1/orders`, {
            params: {
                skip,
                limit,
            },
            headers: {
                authorization: `Bearer ${token}`
            }
        });
}

export async function createOrder(payload) {
    let { token } = localStorage.getItem('auth')
         ? JSON.parse(localStorage.getItem('auth')) : {};

    return await axios.post(`http://localhost:3000/api/v1/orders`, payload, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
}