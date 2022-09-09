import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import "./navbar.css"


const Header = () => {
    const result = useSelector((state) => state.cartData);
    const dispatch = useDispatch();
    console.warn("data in header", result);
    return (
        <div className="header">
            <Link to="/"><h1 className='logo'>Home</h1></Link>

           <div className='home'>
           <Link to="/product"><h1 className='home'>Welcome</h1></Link>
            <Link to="/contact"><h1 className='home'>Contact Us</h1></Link>
            <Link to="/about"><h1 className='home'>About</h1></Link>
            <Link to="/signin"><h1 className='home'>SignIn</h1></Link>
           </div>
            <Link to="/cart">
                <div className="cart-div">
                    <span>{result.length}</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
                </div></Link>
        </div>
    )
}

export default Header;




// import { useSelector, useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom';
// import { productList, productSelect } from '../redux/productAction';
// // import { productSearch } from '../redux/productAction'


// const Header = () => {
//     const result = useSelector((state) => state.cartData);
//     const dispatch = useDispatch();
//     console.warn("data in header", result);

//     return (
//         <div className="header">
//             <Link to="/"><h1 className='logo'>E-Comm</h1></Link>
//             <div className='search-box'>
//                 {/* <input type="text" onChange={(event) => dispatch(productSearch(event.target.value))} placeholder='Search Product' /> 
//                 */}
//               <button onClick={()=>{dispatch(productSelect())}}>Mens</button>
//             </div>
//             <Link to="/cart">
//                 <div className="cart-div">
//                     <span>{result.length}</span>
//                     <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
//                 </div></Link>
//         </div>
//     )
// }

// export default Header;