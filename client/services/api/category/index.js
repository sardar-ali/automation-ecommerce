import axios from "axios"
import { GET_SINGLE_CATEGORY, GET_CATEGORY, CREATE_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from "../..";


export const createCategory = async (data, token) => {
    console.log("token data :::", token)
    console.log("data :::", data)
    try {
        const response = await axios.post(`${CREATE_CATEGORY}`, data, {
            headers: { authorization: `Bearer ${token}` },
          })
        return response;
    } catch (error) {
        return error
    }
}

export const getCategory = async (data) => {
    try {
        const response = await axios.get(`${GET_CATEGORY}`)
        return response;
    } catch (error) {
        return error
    }
}

export const updateCategory = async (id, data) => {
    try {
        const response = await axios.put(`${UPDATE_CATEGORY}/${id}`, data)
        return response;
    } catch (error) {
        return error
    }
}

export const deleteCategory = async (id, token) => {
    console.log("id :::", id)
    console.log("token is here :::", token);


    
    try {
        const response = await axios.delete(`${DELETE_CATEGORY}/${id}`, {
            headers: { authorization: `Bearer ${token}` },
          })
        return response;
    } catch (error) {
        return error
    }
}


