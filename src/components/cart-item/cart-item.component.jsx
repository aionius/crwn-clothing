import { priceConverter } from '../../utils/helpers';
import { CartItemContainer } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {priceConverter(price)}
        </span>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
