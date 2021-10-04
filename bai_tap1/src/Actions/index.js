import * as Types from "../Constants/ActionType";
import callApi from "../Utils/apiCaller";

export const fetchProducts = (products) =>{
    return {
        type : Types.FETCH_PRODUCTS,
        products
    } 
}

export const fetchProductsRequest = () =>{
    return (dispath) => {
        callApi('product',"GET",null).then(response =>{
            dispath(fetchProducts(response.data.data))
        })
    }
}

export const deleteProduct = (id) => {
    return {
        type : Types.DELETE_PRODUCT,
        id
    }
}

export const deleteProductsRequest = (id) =>{
    return (dispath) => {
        callApi(`product/${id}`,'DELETE').then(response =>{
            dispath(deleteProduct(id))
        })
    }
}

export const addProduct = (product) =>{
    return {
        type : Types.ADD_PRODUCT,
        product
    }
}

export const addProductRequest = (product) =>{
    return dispath => {
        callApi('product',"POST",product).then(response =>{
            dispath(addProduct(response.data.data));
        })
    }
}

export const updateProduct = (product) => {
    return {
        type : Types.UPDATE_PRODUCT,
        product
    }
}

export const updateProductRequest = (product) =>{
    return dispath => {
        callApi(`product/${product.id}`,"PUT",product).then(response =>{
            dispath(updateProduct(response.data.data));
        })
    }
}

export const editProduct = (product) => {
    return {
        type : Types.EDIT_PRODUCT,
        product
    }
}

export const editProductRequest = (id) =>{
    return dispath => {
        callApi(`product/${id}`,"GET",null).then(response =>{
            dispath(editProduct(response.data.data));
        })
    }
}