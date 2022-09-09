import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {Routes, Route} from 'react-router-dom'
import Cart from './components/Cart';
import View from './components/View';
import Banner from './components/Banner/Banner';
import ContactUs from './components/ContactUs';
import About from './components/About';
import SignIn from './components/SignIn';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/product' element={<Products/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<SignIn/>} />
        
        <Route path='/cart' element={<Cart />} />
        <Route path='/view' element={<View />} />
      </Routes>
      <div>
      
      </div>
    </div>
  );
}

export default App;
