//import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   console.log("Action Recieved", action);
//   if (action.type === "INCREMENT") {
//     return { ...store, counter: store.counter + 1 };
//   } else if (action.type === "DECEREMENT") {
//     return { counter: store.counter - 1, privacy: store.privacy };
//   } else if (action.type === "SUBTRACT") {
//     return {
//       ...store,
//       counter: store.counter - Number(action.payload.value),
//     };
//   } else if (action.type === "ADD") {
//     return {
//       ...store,
//       counter: store.counter + Number(action.payload.value),
//     };
//   } else if (action.type === "RESET") {
//     return { counter: 0 };
//   } else if (action.type === "PRIVACY") {
//     return { ...store, privacy: !store.privacy };
//   }
//   return store;
// };
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
    privacy: false,
  },
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    add: (state, action) => {
      state.counter += action.payload.value;
    },
    subtract: (state, action) => {
      state.counter -= action.payload.value;
    },
    reset: (state) => {
      state.counter = 0;
    },
    privacy: (state) => {
      state.privacy = !state.privacy;
    },
  },
});
const counterStore = configureStore({
  counter: counterSlice.reducer,
});
//const counterStore = createStore(counterReducer);
export default counterStore;
