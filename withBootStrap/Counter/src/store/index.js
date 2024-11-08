import { createStore } from "redux";

const INITIAL_VALUE = { counter: 0, privacy: false };

const counterReducer = (store = INITIAL_VALUE, action) => {
  console.log("Action Recieved", action);
  if (action.type === "INCREMENT") {
    return { counter: store.counter + 1 };
  } else if (action.type === "DECEREMENT") {
    return { counter: store.counter - 1 };
  } else if (action.type === "SUBTRACT") {
    return { counter: store.counter - Number(action.payload.value) };
  } else if (action.type === "ADD") {
    return { counter: store.counter + Number(action.payload.value) };
  } else if (action.type === "RESET") {
    return { counter: 0 };
  } else if (action.type === "PRIVACY") {
    return { privacy: !store.privacy };
  }
  return store;
};
const counterStore = createStore(counterReducer);
export default counterStore;
