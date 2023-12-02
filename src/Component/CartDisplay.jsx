import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { AllProductsContext } from '../Context/MainContext'
import CartCArd from './CartCArd'

function CartDisplay() {
    const {cart}= useContext(AllProductsContext)
  return (
    <div>
         <div style={{paddingTop:"90px"}} >
        <Row className=' px-5 ' >
          { cart?.length>0?cart.map((item)=>{
            return(
                <Col md={3} lg={4} xl={2} sm={12} className="mt-5 " style={{marginRight:"90px"}} key ={item.id}><CartCArd item={item}/></Col>
            )
          }):"YOUR CARD IS EMPTY"}
         </Row>
    </div>
    </div>
  )
}

export default CartDisplay