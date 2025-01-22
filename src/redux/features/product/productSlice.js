const initialState = {
    status: false,
    priceRange: 1000,
  };
  
  const productSlice = (state = initialState, action) => {
    switch (action.type) {
      case "product/toggleState":
        return {
          ...state,
          status: !state.status,
        };
      case "product/setPriceRange":
        return {
          ...state,
          priceRange: action.payload,
        };
      default:
        return state;
    }
  };
  
  const toggleState = () => ({ type: "product/toggleState" });
  const setPriceRange = (payload) => ({ type: "product/setPriceRange", payload });
  
  export { toggleState, setPriceRange };
  export default productSlice;