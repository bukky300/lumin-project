import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    mobileNav: false,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },

    toggleMobileNav(state) {
      state.mobileNav = !state.mobileNav;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
