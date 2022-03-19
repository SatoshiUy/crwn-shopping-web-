import { BrowserRouter } from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from "./contexts/cart.context";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

