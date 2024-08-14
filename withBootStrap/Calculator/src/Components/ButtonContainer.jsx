import styles from "./ButtonContainer.module.css";
const ButtonContainer = () => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.btnCont}>
      {buttonNames.map((buttonName) => (
        <button className={styles.btn}>{buttonName}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
