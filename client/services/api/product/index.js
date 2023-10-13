import axios from "axios"
import { GET_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, GET_SINGLE_PRODUCT } from "../..";


export const createProduct = async (data) => {
    try {
        const response = await axios.post(`${CREATE_PRODUCT}`, data)
        return response;
    } catch (error) {
        return error
    }
}

export const getProduct = async (data) => {
    try {
        const response = await axios.get(`${GET_PRODUCT}`)
        return response;
    } catch (error) {
        return error
    }
}

export const updateProduct = async (id, data) => {
    try {
        const response = await axios.put(`${UPDATE_PRODUCT}/${id}`, data)
        return response;
    } catch (error) {
        return error
    }
}

export const getSingleProduct = async (id) => {
    try {
        const response = await axios.get(`${GET_SINGLE_PRODUCT}/${id}`)
        return response;
    } catch (error) {
        return error
    }
}

export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`${DELETE_PRODUCT}/${id}`)
        return response;
    } catch (error) {
        return error
    }
}


