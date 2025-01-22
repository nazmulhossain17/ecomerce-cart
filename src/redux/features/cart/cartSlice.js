import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : { products: [], total: 0 };
};

const initialState = loadCartFromLocalStorage();

const saveCartToLocalStorage = (cartState) => {
  localStorage.setItem("cart", JSON.stringify(cartState));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existing) {
        existing.quantity = existing.quantity + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.total += action.payload.price;
      saveCartToLocalStorage(state);
    },
    removeOne: (state, action) => {
      const existing = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (existing && existing.quantity > 1) {
        existing.quantity = existing.quantity - 1;
      } else if (existing) {
        // If quantity is not greater than 1, remove the product from the array
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      }
      state.total -= action.payload.price;
      saveCartToLocalStorage(state);
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.total -= action.payload.price * action.payload.quantity;
      saveCartToLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;
export const selectCart = (state) => state.cart;
export default cartSlice.reducer;