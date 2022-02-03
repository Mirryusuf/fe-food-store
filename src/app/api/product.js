import axios from "axios";

export const getProducts = async params => {
    return await axios.get('http://localhost:3000/api/v1/products', {params})
}