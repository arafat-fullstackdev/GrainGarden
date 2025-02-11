import PropTypes from "prop-types";

import { Card, CardBody, CardTitle,CardText,Button } from "react-bootstrap";

const ProductCard = ({ product }) => {
    return(
        <Card className="m-2" style={{width:"18rem"}}>
            <image alt={product.name} src={product.image} className="imge-top"/>
        <CardBody>
            <CardTitle tag={"h5"}>{product.name}</CardTitle>
            <CardText>
                <strong>${product.price}</strong>
            </CardText>
            <Button color="primary">Add to Bag</Button>
        </CardBody>
        </Card>
    )
}
ProductCard.propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  };
export  default ProductCard;