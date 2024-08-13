import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonContainer";
import Display from "./Components/display";

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonContainer/>
    </div>
  );
}

export default App;
