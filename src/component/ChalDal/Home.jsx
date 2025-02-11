
import React from 'react'
import Navigation from '../Nav/NavBar';
import { Container } from 'react-bootstrap';
import ProductList from './ProductList';

function Home() {
  return (
    <Container>
        <Navigation/>

        <h1 className="my-4">Product Listing</h1>
        <ProductList/>

    </Container>
  )
}

export default Home