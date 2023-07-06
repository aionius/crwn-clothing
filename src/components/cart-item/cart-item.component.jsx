import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import './cart-item.styles.scss';
import { priceConverter } from '../../utils/helpers';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {priceConverter(price)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
