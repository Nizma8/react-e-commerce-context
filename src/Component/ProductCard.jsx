import React, { useContext } from 'react'
import { Card, Button, Alert } from 'react-bootstrap';
import { AllProductsContext } from '../Context/MainContext';
function ProductCard({item}) {
    const {Wishlist,setWishlist,setCart,cart} = useContext(AllProductsContext)
  const  addTowishlist=(product) =>{
    const isAlreadyInWishlist = Wishlist.some((item) => item.id === product.id);

    if (!isAlreadyInWishlist) {
      // If not, add it to the wishlist
      setWishlist([...Wishlist, product]);
      alert("Item added to wishlist");
    } else {
      alert("Item is already in the wishlist");
    }  }
  const addToCart =(product)=>{
    const isAlreadintheCart = cart.some(item=>item.id===product.id)
    if(!isAlreadintheCart){
        setCart([...cart,product])
       alert("Item added to the cart")
    }
    else{
        alert("Item already in the cart")
    }
  }
  return (
   <>
         
     {
       item &&     <Card style={{width:"20rem"}} className='p-2'>
              <Card.Img variant="top" src={item.imageURL}  width={"100px"} height={"200px"} className='rounded mx-auto d-block'/>
              <Card.Body className="p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{item.name}</h5>
                  <span>${item.price}</span>
                </div>
              </Card.Body>
              <Card.Footer className="p-4 pt-0  bg-transparent">
                <div className="d-flex justify-content-between w-100 ">
                  <Button variant="outline-dark"className='me-2'onClick={()=>{addToCart(item)}}  >
                  <i className="fa-solid fa-cart-shopping text-success"></i>
                  </Button>
                  <Button variant="outline-dark" onClick={()=>{addTowishlist(item)}} >
                  <i className="fa-solid fa-heart text-danger" ></i>
                  </Button>
                </div>
              </Card.Footer>
            </Card>}
   
   </>
    
  
  )
}

export default ProductCard