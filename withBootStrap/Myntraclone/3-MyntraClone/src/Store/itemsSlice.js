import {createSlice } from "@reduxjs/toolkit";
const itemSlice = createSlice({
    name: "item",
    initialState: [],
    reducers: {
      addInitialItem: (store, action) => {
        return store;
      },
    },
  });
  export const itemActions = itemSlice.actions;
  export default itemSlice;