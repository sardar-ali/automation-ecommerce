import axios from "axios"
import { CREATE_ORDER } from '../../index';

export const placeOder = async (data) => {
    try {
        const response = await axios.post(`${CREATE_ORDER}`, data)
        return response;
    } catch (error) {
        return error
    }
}