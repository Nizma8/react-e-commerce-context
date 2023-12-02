import React, { useContext, useEffect } from 'react'
import ProductsDisplay from '../Component/ProductsDisplay'
import Header from '../Component/Header'
import WishlistDisplay from '../Component/WishlistDisplay'

function Wishlist() {
    
  return (
  <>
       <Header/>
       <WishlistDisplay />
  </>
  )
}

export default Wishlist