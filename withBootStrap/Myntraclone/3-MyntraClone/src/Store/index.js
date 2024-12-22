import { configureStore } from "@reduxjs/toolkit";

const MyntraStore=configureStore({
    reducers:{
        items: itemSlice.reducer
    }
});

export default MyntraStore;