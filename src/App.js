
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ProductPage from './pages/ProductPage/ProductPage';
import Header from './components/Header/Header';
import CartPage from './pages/CartPage/CartPage';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage cart={cart} setCart={setCart}/>}/>
        <Route path='/:id' element={<ProductPage cart={cart} setCart={setCart}/>}/>
        <Route path='/cart' element={<CartPage cart={cart}/>}/>
      </Routes>
    </>
    
    
  );
}

export default App;
