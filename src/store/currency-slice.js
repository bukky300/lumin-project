import { createSlice } from "@reduxjs/toolkit";

const currencySlice = createSlice({
  name: 'currency',
  initialState: { currency: ''},
  reducers: {
    setCurrency(state, action) {
      const newCurrency = action.payload;
      localStorage.setItem("currency", JSON.stringify(newCurrency));
    },

    getCurrency(state) {
      state.currency = JSON.parse(localStorage.getItem("currency")) || 'USD';
    },
  }
});

export const currencyActions = currencySlice.actions;

export default currencySlice