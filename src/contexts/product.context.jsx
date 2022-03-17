import { createContext, useState } from "react";

import PRODUCTS from '../data/shop-data.json';
import {SHOP_DATA} from '../data/shop.data';

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({children}) => {
  console.log(PRODUCTS)
  const [products, setProducts] = useState(PRODUCTS);
  const value = {products, setProducts};
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
};