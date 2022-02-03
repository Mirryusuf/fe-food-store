import axios from "axios"

export async function getAddress(params){

    let { token } = localStorage.getItem('auth')
        ? JSON.parse(localStorage.getItem('auth')) : {};

    return await axios
    .get('http://localhost:3000/api/v1/delivery-address', {
        params: {
            limit: params.limit,
            skip: params.page * params.limit - params.limit
        },
        headers: {
            authorization: `Bearer ${token}`
        }
    });
}

export async function createAddress(payload) {

    let { token } = localStorage.getItem('auth')
        ? JSON.parse(localStorage.getItem('auth')) : {};
    
    return await axios.post('http://localhost:3000/api/v1/delivery-address', payload, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
}