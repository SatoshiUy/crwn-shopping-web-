import { BrowserRouter } from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { UserProvider } from './contexts/user.context';
import { ProductProvider } from './contexts/product.context';
import { CartProvider } from "./contexts/cart.context";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

