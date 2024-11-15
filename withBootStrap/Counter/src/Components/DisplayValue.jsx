import { useSelector } from "react-redux";

const DisplayCounter = () => {
  // Use useSelector to get the counter value from the Redux store
  const counter = useSelector((store) => store.counter);

  return <p className="lead mb-4">Counter current Value: {counter}</p>;
};

export default DisplayCounter;
