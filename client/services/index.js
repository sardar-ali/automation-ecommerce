// const BASE_URL = "http://localhost:4242/api/v1"
const BASE_URL = "http://178.16.138.60:4242/api/v1"

// auth urls 
export const USER_LOGIN = `${BASE_URL}/user/login`;
export const USER_SIGNUP = `${BASE_URL}/user/signup`;
export const ADMIN_LOGIN = `${BASE_URL}/user/admin-login`;


// products urls 
export const CREATE_PRODUCT = `${BASE_URL}/product/create-product`;
export const GET_PRODUCT = `${BASE_URL}/product/get-products`;
export const UPDATE_PRODUCT = `${BASE_URL}/product/update-product`;
export const DELETE_PRODUCT = `${BASE_URL}/product/delete-product`;
export const GET_SINGLE_PRODUCT = `${BASE_URL}/product/get-single-product`;
export const GET_ALL_PRODUCT_BY_SPECIFIC_CATEGORY = `${BASE_URL}/product/get-all-product-by-specific-category`;
export const GET_ALL_PRODUCT_BY_CATEGORY_NAME = `${BASE_URL}/product/get-all-product-by-category-name`;




// category urls 
export const CREATE_CATEGORY = `${BASE_URL}/category/create-category`;
export const GET_CATEGORY = `${BASE_URL}/category/get-all-category`;
export const GET_SINGLE_CATEGORY = `${BASE_URL}/category/get-single-category`;
export const UPDATE_CATEGORY = `${BASE_URL}/category/update-category`;
export const DELETE_CATEGORY = `${BASE_URL}/category/delete-category`;




export const CREATE_ORDER = `${BASE_URL}/order/create-order`;
