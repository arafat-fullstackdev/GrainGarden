import React, { useState } from "react";
import products from "./product";
//import '../Body/menu.css';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = () => {
  const [productList, setProductList] = useState(products);

  return (
    <Container className="text-center">
      <h1>Grocery Shop</h1>

      <Row className="g-4 menu">
        {productList.map((products) => (
          <Col key={products.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={products.image}
                alt={products.name}
                style={{ width: "100px", height: "100px", margin: "0 auto" }}
              />
              <Card.Body>
                <Card.Title>{products.name}</Card.Title>
                <p>price: ${products.price}</p>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
