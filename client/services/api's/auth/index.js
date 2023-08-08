import axios from "axios"
import { USER_LOGIN, USER_SIGNUP, ADMIN_LOGIN } from '../index';


export const userSignup = async (data) => {
    try {
        const response = await axios.post(`${USER_SIGNUP}`, data)
        return response;
    } catch (error) {
        return error
    }
}


export const userLogin = async (data) => {
    try {
        const response = await axios.post(USER_LOGIN, data)
        return response;
    } catch (error) {
        return error
    }
}


export const adminLogin = async () => {
    try {
        const response = await axios.post(ADMIN_LOGIN)
        console.log("response ::", response)
        return response;
    } catch (error) {
        return error
    }
}