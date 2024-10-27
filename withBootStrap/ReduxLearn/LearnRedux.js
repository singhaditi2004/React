const redux = require("redux");
const INITIAL_VAL = {
  counter: 0,
};
const reducer = (store = INITIAL_VAL, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { counter: store.counter + 1 };
  }
    return newStore;
};
const createStore = redux.createStore(reducer);
const subscriber = () => {
  const state = createStore.getState();
  console.log(state);
};
createStore.subscribe(subscriber);
createStore.dispatch({ type: "INCREMENT" });
