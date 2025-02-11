import { Container, Row, Col}  from 'react-bootstrap';
import ProductCard from './ProductCard';

const Products = [
    {id:1, name:"Cumin Jira", price: 3.5, image: '../../assets/picture/cumin-jira-100-gm.webp'},
    {id:2, name:"Clove (Lobongo)", price: 2.5, image: '../../assets/picture/clove-lobongo-50-gm.webp'},
    {id:3, name:"Cinamon", price: 5, image: '../../assets/picture/cinnamon-daruchini-whole-100-gm.webp'},
    {id:4, name:"Chilies", price: 1.5, image: '../../assets/picture/dried-chillies-shukna-morich-100-gm.webp'},
]
const  ProductList=()=> {
  return (
    <Container>
        <Row>
            {Products.map((product) =>(
                <Col sm="4" key={product.id}>
                    <ProductCard product={product}/>
                </Col>
            ))}
        </Row>
    </Container>
  );
};

export default ProductList;