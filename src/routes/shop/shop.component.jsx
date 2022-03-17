import { useContext } from 'react';
import {ProductContext} from '../../contexts/product.context'
import './shop.styles.scss'
import ProductCard from '../../components/product-card/product-card.component.jsx';

function Shop() {
  const { products } = useContext(ProductContext)
  return (
    <div className='product-container'>
      {
        products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))
      }
    </div>
  )
}

export default Shop