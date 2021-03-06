
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import './product-card.styles.scss';

function ProductCard({ product }) {
  const {name, imageUrl, price} = product;
  const { addItemToCart } = useContext(CartContext);

  const hangleAddProductToCart = () => addItemToCart(product);
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name}/>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={hangleAddProductToCart}>Add to card</Button>
    </div>
  )
}

export default ProductCard