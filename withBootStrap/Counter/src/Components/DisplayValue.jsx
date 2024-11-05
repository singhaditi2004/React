import { useSelector } from "react-redux";

const DisplayValue = () => {
  const counter = useSelector((store) => store.counter);
  return (
    <>
      <p className="lead mb-4">Counter current value : {counter}</p>
    </>
  );
};
export default DisplayValue;
