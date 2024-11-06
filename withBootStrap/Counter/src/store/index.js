import { createStore } from "redux";

const INITIAL_VALUE = { counter: 0 };

const counterReducer = (store = INITIAL_VALUE, action) => {
  console.log("Action Recieved", action);
  if (action.type === "INCREMENT") {
    return { counter: store.counter + 1 };
  }
  if (action.type === "DECEREMENT") {
    return { counter: store.counter - 1 };
  }
  return store;
};
const counterStore = createStore(counterReducer);
export default counterStore;
