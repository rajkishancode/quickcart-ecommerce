import {createContext, useContext,useReducer} from "react";
import { productsReducer } from "./productReducer";
import {
  compose,
  categoryFilter,
  priceFilter,
  ratingFilter,
  sortProducts,
  brandFilter,
} from "./helpers";


const ProductsContext = createContext(null);


const initialState = {
    products:[],
    filteredProducts:[],
    category:[],
    brand:[],
    sortBy:null,
    rating:null,
    filterPrice:50,
};


const ProductsProvider = ({children}) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);
  const filteredProducts = compose(
    categoryFilter,
    priceFilter,
    ratingFilter,
    sortProducts,
    brandFilter
  )(state, state.products);

  return (
    <ProductsContext.Provider value={{ state, dispatch, filteredProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => useContext(ProductsContext);

export { ProductsProvider,useProducts,initialState as productInitialiser };