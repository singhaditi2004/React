import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECEREMENT" });
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          onClick={handleIncrement}
          className="btn btn-primary btn-lg px-4 gap-3"
        >
          +1
        </button>
        <button
          type="button"
          onClick={handleDecrement}
          className="btn btn-outline-secondary btn-lg px-4"
        >
          -1
        </button>
      </div>
    </>
  );
};

export default Controls;
