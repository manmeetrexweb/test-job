const initialState = {
    stock: [],
  };
  
  const stockReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_STOCK_DATA":
        return {
          ...state,
          stock: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default stockReducer;