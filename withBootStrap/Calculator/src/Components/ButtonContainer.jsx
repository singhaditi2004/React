import styles from "./ButtonContainer.module.css";
const ButtonContainer = () => {
  return (
    <div className={styles.btnCont}>
      <button className={styles.btn}>C</button>
      <button className={styles.btn}>C</button>
      <button className={styles.btn}>C</button>
      <button className={styles.btn}>C</button>
      <button className={styles.btn}>C</button>
    </div>
  );
};

export default ButtonContainer;
