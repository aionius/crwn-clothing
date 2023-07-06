import { useContext } from 'react';
import Button from '../button/button.component';

import './product-card.styles.scss';
import { CartContext } from '../../context/cart.context';
import { priceConverter } from '../../utils/helpers';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{priceConverter(price)}</span>
      </div>
      <Button type="button" buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
