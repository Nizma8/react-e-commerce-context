import React, {  useContext } from 'react'
import { AllProductsContext } from '../Context/MainContext'
import { Col, Row } from 'react-bootstrap'
import WishlistCArd from './WishlistCArd'
function WishlistDisplay() {
    const {Wishlist} = useContext(AllProductsContext)
  return (
    <div style={{paddingTop:"90px"}} >
        <Row className=' px-5 ' >
          { Wishlist?.length>0?Wishlist?.map((item)=>{
            return(
                <Col md={3} lg={4} xl={2} sm={12} className="mt-5 " style={{marginRight:"90px"}} key ={item.id}>
                    <WishlistCArd item={item}/></Col>
            )
          }):"YOUR WISLIST IS EMPTY"}
         </Row>
    </div>
  )
}

export default WishlistDisplay