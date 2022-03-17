import './checkout-item.styles.scss';

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context';

function CheckoutItem({cartItem}) {
  console.log(cartItem)
  const { name, imageUrl, quantity, price} = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const handleDecreaseItem = () => removeItemFromCart(cartItem);
  const handleIncreaseItem = () => addItemToCart(cartItem);
  const handleRemoveItem = () => clearItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleDecreaseItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleIncreaseItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={handleRemoveItem}>&#10005;</span>
    </div>
  )
}

export default CheckoutItem