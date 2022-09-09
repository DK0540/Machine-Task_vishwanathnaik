import { PRODUCT_LIST, SEARCH_PRODUCT, PRODUCT_LIST2, PRODUCT_LIST1, PRODUCT_LIST3, RESET_ITEM } from "./constant"

export const productList = () => {
  
    return {
        type: PRODUCT_LIST,
    }
}


export const productList1 = () => {
  
    return {
        type: PRODUCT_LIST1,
    }
}

export const productList2 = () => {
  
    return {
        type: PRODUCT_LIST2,
    }
}


export const productList3 = () => {
  
    return {
        type: PRODUCT_LIST3,
    }
}




export const productReset = () => {
  
    return {
        type: RESET_ITEM,
    }
}






export const productSearch = (query) => {
  
    return {
        type: SEARCH_PRODUCT,
        query
    }
}




// import { PRODUCT_LIST, PRODUCT_SELECT} from "./constant"

// export const productList = () => {
  
//     return {
//         type: PRODUCT_LIST,
//     }
// }


// export const productSelect = (data) => {
  
//     return {
//         type: PRODUCT_SELECT,
//         data
//     }
// }

// export const productSearch = (result) => {
  
//     return {
//         type: SEARCH_PRODUCT,
//         result
        
//     }
// }