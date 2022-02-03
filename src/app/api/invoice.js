import axios from "axios";

export async function getInvoiceByOrderId(order_id) {
    let { token } = localStorage.getItem('auth')
         ? JSON.parse(localStorage.getItem('auth')) : {};

    return await axios
        .get(`http://localhost:3000/api/v1/invoices/${order_id}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
}

export async function getInvoice(params){

    let { token } = localStorage.getItem('auth')
        ? JSON.parse(localStorage.getItem('auth')) : {};

    return await axios
    .get('http://localhost:3000/api/v1/invoices', {
        params: {
            limit: params.limit,
            skip: params.page * params.limit - params.limit
        },
        headers: {
            authorization: `Bearer ${token}`
        }
    });
}