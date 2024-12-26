import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemsSlice";

const MyntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
  },
});

export default MyntraStore;
