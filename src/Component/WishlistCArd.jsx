import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap';
import { AllProductsContext } from '../Context/MainContext';
function WishlistCArd({item}) {
    const {cart,setCart,Wishlist,setWishlist} = useContext(AllProductsContext)
    const addToCart =(product)=>{
        setCart([...cart,product])
        console.log(product);
      }
      const handleRemove=(product)=>{
       const updatedWishlist =  Wishlist.filter(item=>item.id !=product.id)
       setWishlist(updatedWishlist);
         
        
      }
  return (
item &&(<Card style={{width:"20rem"}} className='p-2'>
    <Card.Img variant="top" src={item.imageURL}  width={"100px"} height={"200px"} className='rounded mx-auto d-block'/>
    <Card.Body className="p-4">
      <div className="text-center">
        <h5 className="fw-bolder">{item.name}</h5>
        <span>${item.price}</span>
      </div>
    </Card.Body>
    <Card.Footer className="p-4 pt-0  bg-transparent">
      <div className="d-flex justify-content-between w-100 ">
        <Button variant="outline-dark"className='me-2' onClick={()=>{handleRemove(item)}} >
        <i className="fa-solid fa-heart-circle-minus text-danger" ></i>
        </Button>
        <Button variant="outline-dark" onClick={()=>{addToCart(item)}} >
        <i className="fa-solid fa-cart-shopping text-success" ></i>
        </Button>
      </div>
    </Card.Footer>
  </Card>
)
  )
}

export default WishlistCArd