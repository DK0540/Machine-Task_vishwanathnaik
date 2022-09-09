import {SET_PRODUCT_LIST, SET_PRODUCT_LIST2,  SET_PRODUCT_LIST1, SET_PRODUCT_LIST3, SET_RESET_ITEM} from "./constant"



export const productData = (data = [], action) => {
    switch (action.type) {
            case SET_PRODUCT_LIST:
                console.warn("PRODUCT_LIST condition ", action)
                return [...action.data]

                case SET_PRODUCT_LIST2:
                    console.warn("PRODUCT_LIST2 condition ", action)
                    return [...action.data]

                    case SET_PRODUCT_LIST1:
                        console.warn("PRODUCT_LIST1 condition ", action)
                         return [...action.data]

                         case SET_PRODUCT_LIST3:
                        console.warn("PRODUCT_LIST3 condition ", action)
                         return [...action.data]

                         case SET_PRODUCT_LIST1:
                        console.warn("RESET_ITEM condition ", action)
                         return [...action.data]



        default:
            return data
    }
}