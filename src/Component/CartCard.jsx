import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { AllProductsContext } from "../Context/MainContext";
import { useNavigate } from "react-router-dom";

function CartCArd({ item }) {
  const { Wishlist, setWishlist, cart, setCart, checkOut, setCheckOut } =
    useContext(AllProductsContext);
  const navigate = useNavigate();
  const addTowishlist = (product) => {
    setWishlist([...Wishlist, product]);
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };
  const handleCheckOut = (product) => {
    setCheckOut([...checkOut, product]);
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    //    console.log(product);
    navigate("/checkout");
  };
  return (
    item && (
      <Card style={{ width: "20rem" }} className="p-2">
        <Card.Img
          variant="top"
          src={item.imageURL}
          width={"100px"}
          height={"200px"}
          className="rounded mx-auto d-block"
        />
        <Card.Body className="p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{item.name}</h5>
            <span>${item.price}</span>
          </div>
        </Card.Body>
        <Card.Footer className="p-4 pt-0  bg-transparent">
          <div className="d-flex justify-content-between w-100 ">
            <Button
              variant="outline-info"
              className="me-2"
              onClick={() => {
                handleCheckOut(item);
              }}
            >
              Buy now
            </Button>
            <Button
              variant="outline-dark"
              onClick={() => {
                addTowishlist(item);
              }}
            >
              <i className="fa-solid fa-heart text-danger"></i>
            </Button>
          </div>
        </Card.Footer>
      </Card>
    )
  );
}

export default CartCArd;
