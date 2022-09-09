import { addToCart,addToView, emptyCart, removeToCart } from '../redux/action';
import "./cart.css"

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import { productList2 } from '../redux/productAction';
import { productList1 } from '../redux/productAction';
import { productList3 } from '../redux/productAction';
import { productReset} from  '../redux/productAction';

import {useSelector} from 'react-redux'
import { useEffect } from 'react';
import Footer from './Footer/Footer';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component", data);
  
  useEffect(()=>{
    dispatch(productList1())
  },[])
  
  return (
    <div>
      <div className='btns'>
    
      <button className='btn' onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      <button className='btn' onClick={() => dispatch(productList())}>Mens Cloth</button>
      <button className='btn' onClick={() => dispatch(productList2())}>Juwellaries</button>
      <button className='btn' onClick={() => dispatch(productList3())}>Electronic</button>
      <button className='btn' onClick={() => dispatch(productReset())}>Reset</button>
     
      </div>
       <div className='product-container'>
        {
          data.map((item)=><div className='product-item'>
            <img className='mainImage' src={item.image} alt="" />
            <div>Name : {item.title} </div>
            <div>Rating : {item.rating.rate} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            {/* <div>Brand : {item.brand} </div> */}
            <div>
              <button className='btn3' onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
              <button className='btn4' onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>

            </div>
            <Link to="/view">
                <div >
                    {/* <span>{result.length}</span> */}
                    <img  className="view" onClick={() => dispatch(addToView(item))} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3C6Yv3HE3dUQ2sMXlp3QGMmXDm8Nc5dUM-BgVVjEk9qKcu9iua3CyhzARkPuAUnXbaYU&usqp=CAU" alt="" />
                </div></Link>
          </div>)
        }
      </div>
      <Footer/>
    </div>
  );
}

export default Main;



// import { addToCart, emptyCart, removeToCart } from '../redux/action';
// import { useDispatch } from 'react-redux'
// import { productList, productSelect } from '../redux/productAction';
// import {useSelector} from 'react-redux'
// import { useEffect } from 'react';
// import "./cart.css"

// function Main() {
//   const dispatch = useDispatch();
//   let data = useSelector((state)=>state.productData);
//   console.warn("data in main component", data);
  
//   useEffect(()=>{
//     dispatch(productList())
//   },[])

//   useEffect(()=>{
//     dispatch(productSelect())
//   },[])
//   return (
//     <div>
//       <div>
//       <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
//       </div>
//       <div className='product-container'>
//         {
//           data.map((item)=><div className='product-item'>
//             <img className='mainImage' src={item.image} alt="" />
//             <div>Name : {item.title} </div>
//             <div>Rating : {item.rating.rate} </div>
//             <div>Price : {item.price} </div>
//             <div>Category : {item.category} </div>
//             {/* <div>Brand : {item.brand} </div> */}
//             <div>
//               <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
//               <button onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>

//               </div>
//           </div>)
//         }
//       </div>
//     </div>
//   );
// }

// export default Main;
