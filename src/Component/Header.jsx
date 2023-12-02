import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AllProductsContext } from "../Context/MainContext";
function Header() {
  const { Wishlist, cart, products, setProducts, getAllProdcuts } =
    useContext(AllProductsContext);
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    const searchTerm = search.toLowerCase();
    if (search) {
      const keySeach = products.filter((item) =>
        item.name.toLowerCase().includes(searchTerm)
      );
      setProducts(keySeach);
    } else {
      setProducts(products);
      getAllProdcuts();
    }
  };
  useEffect(() => {
    handleSearch();
    console.log(`current prodcuts ${products}`);
  }, [search]);
  return (
    <div className="position-fixed w-100 z-1">
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to={"/"}>
            <Navbar.Brand href="#!">TeeRex</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Form className="d-flex mx-auto ">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 "
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {/* <Button variant='outline-dark me-2' onClick={handleSearch}>Search</Button> */}
            </Form>
            <form className="d-flex ms-auto">
              <Link to={"/cart"}>
                <Button variant="outline-dark" type="submit" className="me-2">
                  <i className="bi bi-cart-fill me-1"></i>
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">
                    {cart?.length}
                  </span>
                </Button>
              </Link>
              <Link to={"/wishlist"}>
                <Button variant="outline-dark" type="submit">
                  <i className="bi bi-cart-fill me-1"></i>
                  Wishlist
                  <span className="badge bg-dark text-white ms-1 rounded-pill">
                    {Wishlist?.length}
                  </span>
                </Button>
              </Link>
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
