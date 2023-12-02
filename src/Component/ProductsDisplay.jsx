import React, { useContext, useEffect } from 'react'
import ProductCard from './ProductCard'
import { Col, Row } from 'react-bootstrap'
import { AllProductsContext } from '../Context/MainContext'
import { getAllProductsApi } from '../Services/AllApi'

function ProductsDisplay() {
    const {products,setProducts,getAllProdcuts} = useContext(AllProductsContext)
    // get all Prodcuts
  
    useEffect(()=>{
        getAllProdcuts()
    },[])
  return (
    <div style={{paddingTop:"90px"}} >
        <Row className=' px-5 ' >
          { products?.length>0?products.map((item)=>{
            return(
                <Col md={3} lg={4} xl={2} sm={12} className="mt-5 " style={{marginRight:"90px"}} key ={item.id}><ProductCard item={item}/></Col>
            )
          }):"Please wait while its loading"}
         </Row>
    </div>
  )
}

export default ProductsDisplay