import React, { useState } from "react";
import products from ".././product";
import Button from "react-bootstrap/Button";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
// import '../Body/menu.css';

const Spicey = () => {
  const [productList, setProductList] = useState(products);
  const [cart,setCart] = useState([]);

  const addToCart = (product) => {
    setCart((pervCart) => [...pervCart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
      {/* <h1>Grocery Shop</h1> */}
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
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in.
                </Card.Text>
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

      {/* //add to cart */}
      <div className="m-4">
        <h2>add to cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>
      <ToastContainer/>
    </Container>
  );
};

export default Spicey;
