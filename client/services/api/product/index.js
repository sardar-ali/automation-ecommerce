import axios from "axios"
import { GET_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, GET_SINGLE_PRODUCT, GET_ALL_PRODUCT_BY_SPECIFIC_CATEGORY, GET_ALL_PRODUCT_BY_CATEGORY_NAME } from "../..";


export const createProduct = async (data, token) => {
    try {
        const response = await axios.post(`${CREATE_PRODUCT}`, data, {
            headers: { authorization: `Bearer ${token}` },
        })
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

export const updateProduct = async (id, data, token) => {
    try {
        const response = await axios.put(`${UPDATE_PRODUCT}/${id}`, data, {
            headers: { authorization: `Bearer ${token}` },
        })
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

export const deleteProduct = async (id, token) => {
    try {
        const response = await axios.delete(`${DELETE_PRODUCT}/${id}`, {
            headers: { authorization: `Bearer ${token}` },
        })
        return response;
    } catch (error) {
        return error
    }
}


export const getAllProductOfSpecificCategory = async (id) => {
    try {
        const response = await axios.get(`${GET_ALL_PRODUCT_BY_SPECIFIC_CATEGORY}/${id}`)
        return response;
    } catch (error) {
        return error
    }
}

export const getAllProductByCategoryName = async (name) => {
console.log("category name here :::", name)
    try {
        const response = await axios.get(`${GET_ALL_PRODUCT_BY_CATEGORY_NAME}/${name}`)
        return response;
    } catch (error) {
        return error
    }
}