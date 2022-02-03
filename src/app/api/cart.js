import axios from "axios";
import { setItems } from "../features/Cart/actions";
import store from "../store";

export async function saveCart(token, cart) {
    return await axios.put('http://localhost:3000/api/v1/carts', {items: cart}, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
}

export async function getCart() {
    const { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : {};
    if(!token) return;

    const {data} = await axios.get('http://localhost:3000/api/v1/carts', {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    if(!data.error){
        store.dispatch(setItems(data));
        localStorage.setItem('cart', JSON.stringify(data));
    }
}