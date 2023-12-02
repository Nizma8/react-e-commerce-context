import React, { useContext } from 'react'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { AllProductsContext } from '../Context/MainContext';
import { Link, useNavigate } from 'react-router-dom';
function CheckoutPages() {
    const {checkOut,setCheckOut} = useContext(AllProductsContext)
const navigate = useNavigate()
   const  handleRemoveCheckOut =(pro)=>{
    const removedItem = checkOut?.filter((item)=>item.id!==pro.id)
    setCheckOut(removedItem)
   }

const handlePlace=()=>{
    if(checkOut?.length>0){
        alert("you succesfully placed the order")
        navigate('/')
    }
    
}
  return (
    <div>
<section className="h-full " >
      <Container className="py-5 h-100">
        <Row className="d-flex justify-content-center align-items-center h-100">
          <Col lg={12}>
            <Card className="card-registration card-registration-2" style={{ borderRadius: '15px' }}>
              <Card.Body className="p-0">
                <Row className="g-0">
                  <Col lg={8}>
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">{checkOut?.length}</h6>
                      </div>
                      <hr className="my-4"/>

                      {/* Product 1 */}
                      {checkOut?.length>0?checkOut?.map(item=>(<Row className="mb-4 d-flex justify-content-between align-items-center" key={item.id}>
                        <Col md={2} lg={2} xl={2}>
                          <img src={item.imageURL} className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                        </Col>
                        <Col md={3} lg={3} xl={3}>
                          <h6 className="text-muted">{item.name}</h6>
                          <h6 className="text-black mb-0">{item.type}</h6>
                        </Col>
                        <Col md={3} lg={3} xl={2} className="d-flex">
                          <Button className="btn-link px-2" >
                            <i className="fas fa-minus"></i>
                          </Button>
                          <Form.Control id="form1" min="0" name="quantity" value="1" type="number" className="form-control form-control-sm"/>
                          <Button className="btn-link px-2" >
                            <i className="fas fa-plus"></i>
                          </Button>
                        </Col>
                        <Col md={3} lg={2} xl={2} offset-lg={1}>
                          <h6 className="mb-0">${item.price}</h6>
                        </Col>
                        <Col md={1} lg={1} xl={1} className="text-end" onClick={()=>handleRemoveCheckOut(item)}>
                          <i className="fas fa-times text-danger"></i>
                        </Col>
                      </Row>)
):""}
                      {/* Product 2 */}
                      {/* Add similar code blocks for other products */}

                      <hr className="my-4"/>

                      <div className="pt-5">
                        <Link to={'/'}><h6 className="mb-0"> <i className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</h6></Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} className="bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4"/>

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">items {checkOut?.length}</h5>
                        <h5>$ {checkOut?.map(item=>item.price)?.reduce((a,b)=>a+b,0)}</h5>
                      </div>


                     

                     

                      <hr className="my-4"/>

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>${checkOut?.map(item=>item.price)?.reduce((a,b)=>a+b,0)}</h5>
                      </div>

                      <Button type="button" className="btn btn-dark btn-block btn-lg" data-mdb-ripple-color="dark" onClick={handlePlace}>Place Order</Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default CheckoutPages