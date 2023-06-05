import { productInitialiser } from "./ProductProvider";

const productsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      const products = action.payload;
      return { ...state, products: products };

    case "CATEGORY":
      const newCategory = state.category.includes(action.category)
        ? state.category.filter((cat) => cat !== action.category)
        : [...state.category, action.category];

      return { ...state, category: newCategory };

    case "BRAND":
      const newBrand = state.brand.includes(action.brand)
        ? state.brand.filter((cat) => cat !== action.brand)
        : [...state.brand, action.brand];

      return { ...state, brand: newBrand };

    case "SORT":
      return { ...state, sortBy: action.sort };

    case "RATING":
      return { ...state, rating: action.rating };

    case "PRICE_FILTER":
      return { ...state, filterPrice: action.filterPrice };

    case "CLEAR":
      return { ...productInitialiser, products: state.products };

    default:
      return state;
  }
};

export { productsReducer };
