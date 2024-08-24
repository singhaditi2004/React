import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonContainer";
import Display from "./Components/display";

function App() {
  let [calciVal, setCalciVal] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText == "C") {
      setCalciVal("");
    } else if (buttonText == "=") {
      const result = eval(calciVal);
      setCalciVal(result.toString());
    } else if (buttonText == "<-") {
      const newDispVal = calciVal.slice(0, -1);
      setCalciVal(newDispVal);
    } else {
      const newDispVal = calciVal + buttonText;
      setCalciVal(newDispVal);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calciVal} />
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
