import React, { useState } from "react";
import styles from "./styles.module.css";

function Number() {
  const [number, setNumber] = useState(0);
  return (
    <div className={styles.container}>
      <div>{number}</div>
      <div>
        <button
          className={styles.button}
          onClick={() => {
            setNumber(number + 100);
          }}
        >
          +100
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setNumber(number - 100);
          }}
        >
          -100
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setNumber(number * 10);
          }}
        >
          * 10
        </button>
        <button
          className={styles.button}
          onClick={() => {
            setNumber(number / 10);
          }}
        >
          / 10
        </button>
      </div>
    </div>
  );
}

export default Number;
