import { configureStore, createSlice } from "@reduxjs/toolkit";
const itemSlice = createSlice({
  name: "item",
  initialState: [ hhhhh],
  reducers: {
    addInitialItem: (store, action) => {
      return store;
    },
  },
});

const MyntraStore=configureStore({
    reducers:{
        items: itemSlice.reducer
    }
});

export default MyntraStore;