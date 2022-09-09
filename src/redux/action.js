import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART , ADD_TO_VIEW1} from "./constant"

export const addToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: ADD_TO_CART,
        data
    }
}


export const addToView = (data) => {
    console.warn("action is called", data.id)
    return {
        type: ADD_TO_VIEW1,
        data
    }
}

export const removeToCart = (data) => {
    console.warn("action removeToCart", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = () => {
    console.warn("action emptyCart",)
    return {
        type: EMPTY_CART,
    }
}