import React, { useState } from "react";
import products from "./product";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Body/menu.css';
import Spicey from "./data/Spicey";

const Menu = () => {
  const [productList, setProductList] = useState(products);
  const [cart,setCart] = useState([]);

  const addToCart = (product) => {
    setCart((pervCart) => [...pervCart, product]);
  };
  const removeFromCart = (product) => {
    setCart((pervCart) => setCart.filter((item) =>{
      item.id != product.id;
    }));
  }

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
      <h1>Grocery Shop</h1>
      <Row className="g-4 menu">
        {productList.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ width: "100px", height: "100px", margin: "0 auto" }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <p>price: ${product.price}</p>
                
                <Button variant="primary" onClick={() => addToCart}>
                  Add to Cart
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <Spicey/>

      {/* //add to cart */}
      <div className="m-4">
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}{" "}
            <Button variant="danger"
            size="sm"
            onClick={()=> removeFromCart(item)}>
              Remove
            </Button>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};


export default Menu;
