



const authFormReducer = (state, action) => {

  switch (action.type) {

    case "LOADING_ON":
      return { ...state, loading: true };

    case "LOADING_OFF":
      return { ...state, loading: false };

    case "FULL_NAME":
      return { ...state, loading: action.payload };

    case "EMAIL":
      return { ...state, loading: action.payload };

    case "PASSWORD":
      return { ...state, loading: action.payload };

    case "CONFIRM_PASSWORD":
      return { ...state, loading: action.payload };

    case "AGREEMENT":
      return { ...state, loading: !state.agreement};

    default:
      return state;
  }
};


export {authFormReducer};