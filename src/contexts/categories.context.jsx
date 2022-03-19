import { createContext, useEffect, useState } from "react";

// import {SHOP_DATA} from '../data/shop-data.js';

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    // addCollectionAndDocuments('categories',SHOP_DATA);
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap)
      console.log(categoryMap)
    }
    
    getCategoriesMap();
  },[])

  const value = {categoriesMap, setCategoriesMap};
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  )
};