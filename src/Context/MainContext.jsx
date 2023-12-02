import React, { createContext, useState } from 'react'
import { getAllProductsApi } from '../Services/AllApi'
export const AllProductsContext = createContext()

function MainContext({children}) {
 const [products,setProducts]=useState([])
 const [Wishlist,setWishlist]=useState([])
 const [cart,setCart]=useState([])
 const [checkOut,setCheckOut]=useState([])
 const getAllProdcuts =async()=>{
    const response = await getAllProductsApi()
    setProducts(response.data)
}
  return (

    <AllProductsContext.Provider value={{products,setProducts, setWishlist,Wishlist,cart,setCart,checkOut,setCheckOut,getAllProdcuts}}>{children}</AllProductsContext.Provider>
  )
}

export default MainContext