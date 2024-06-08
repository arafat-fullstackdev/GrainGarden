import React, {useState} from 'react';
import products from './product';
import '../Body/menu.css';
const Menu = () => {
  const [productList, setProductList] = useState(products);

  return (
    <div className='container'>
      <h1>Grocery Shop</h1>
      <div className='menu'>
        {productList.map(products => (
          <div key={products.id}>
            <h2>{products.name}</h2>
            <p>price: ${products.price}</p>
            <img src={products.image} alt={products.name} style={{ width: '100px', height: '100px' }}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;