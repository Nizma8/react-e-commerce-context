import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePages from './Pages/HomePages'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import CheckoutPages from './Pages/CheckoutPages'

function App() {

  return (
    <>
   <Routes>
    <Route path="/" element={<HomePages/>}/>
    <Route path='/wishlist' element={<Wishlist/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path ='/checkout' element={<CheckoutPages/>}/>
   </Routes>
    </>
  )
}

export default App
