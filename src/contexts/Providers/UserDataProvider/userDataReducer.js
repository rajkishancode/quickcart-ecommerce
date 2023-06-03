const userDataReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_WISHLIST":
      return { ...state, wishlist: action.payload.wishlist };

    case "UPDATE_CART":
      return {
        ...state,
        cart: action.payload.cart,
      };

    case "UPDATE_ORDERS":
      return { ...state, order: action.payload.orders };

    case "UPDATE_ADDRESS_LIST":
      return { ...state, addressList: action.payload.addressList };

    default:
      return state;
  }
};

export { userDataReducer };
