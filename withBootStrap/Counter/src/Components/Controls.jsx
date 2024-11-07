import { useDispatch } from "react-redux";
import "../App.css";
import { useRef } from "react";

const Controls = () => {
  const dispatch = useDispatch();
  const inputEle = useRef();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECEREMENT" });
  };
  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        value: inputEle.current.value,
      },
    });
    inputEle.current.value = "";
  };
  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        value: inputEle.current.value,
      },
    });
    inputEle.current.value = "";
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
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input
          type="text"
          className="btn btn-primary btn-lg px-4 gap-3 number-input "
          placeholder="Enter number"
          ref={inputEle}
        />
        <button
          type="button"
          className="btn btn-info btn-lg px-4"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};

export default Controls;
