import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST, SET_PRODUCT_LIST2,PRODUCT_LIST2, SET_PRODUCT_LIST1, PRODUCT_LIST1, SET_PRODUCT_LIST3, PRODUCT_LIST3, RESET_ITEM, SET_RESET_ITEM} from './constant';



function* getProducts1() {
    let data = yield fetch("https://fakestoreapi.com/products");
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SET_PRODUCT_LIST1, data})
}

function* getProducts() {
    let data = yield fetch("https://fakestoreapi.com/products/category/men's clothing ");
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SET_PRODUCT_LIST, data})
}


function* getProducts2() {
    let data = yield fetch("https://fakestoreapi.com/products/category/jewelery");
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SET_PRODUCT_LIST2, data})
}

function* getProducts3() {
    let data = yield fetch("https://fakestoreapi.com/products/category/electronics");
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SET_PRODUCT_LIST3, data})
}



function* getProducts11() {
    let data = yield fetch("https://fakestoreapi.com/products");
    data = yield data.json();
    console.warn("action is called", data)
    yield put({type: SET_PRODUCT_LIST1, data})
}




function* searchProducts(data) {
    let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
    result = yield result.json();
    console.warn("action is called", result)
    yield put({type: SET_PRODUCT_LIST, data:result})
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
    yield takeEvery(PRODUCT_LIST2, getProducts2)
    yield takeEvery(PRODUCT_LIST1, getProducts1)
    yield takeEvery(PRODUCT_LIST3, getProducts3)

    yield takeEvery(RESET_ITEM, getProducts11)

   
}

export default productSaga;


// import { takeEvery, put } from 'redux-saga/effects'
// import { PRODUCT_LIST, PRODUCT_SELECT, SET_PRODUCT_LIST } from './constant';

// function* getProducts() {
//     let data = yield fetch('https://fakestoreapi.com/products');
//     data = yield data.json();
//     console.warn("action is called", data)
//     yield put({type: SET_PRODUCT_LIST, data})
// }

// function* getSelected() {
//     let data = yield fetch('https://fakestoreapi.com/products/category/jewelery');
//     data = yield data.json();
//     console.log("Vishwa",data)
//     yield put({type: PRODUCT_SELECT, data})
// }

// function* searchProducts(data) {
//     let result = yield fetch(`https://fakestoreapi.com/products?q=${data.query}`);
//     result = yield result.json();
//     console.warn("action is called", result)
//     yield put({type: SET_PRODUCT_LIST, data:result})
// }

// function* searchProducts(data) {
//     let result = yield fetch(`https://fakestoreapi.com/products/category/jewelery`);
//     result = yield result.json();
//     console.warn("action is called", result)
//     yield put({type: SET_PRODUCT_LIST, data:result})
// }

// fetch('https://fakestoreapi.com/products/category/jewelery')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

// function* productSaga() {
//     yield takeEvery(PRODUCT_LIST, getProducts)
//     yield takeEvery(PRODUCT_SELECT, getSelected)
//     // yield takeEvery(SEARCH_PRODUCT, searchProducts)

// }

// export default productSaga;