import React from "react";
import styles from "./Card.module.scss";
export default function Card() {
  return (
    <div className={styles["card"]}>
      <h4>Your Result</h4>
      <div className={styles["score-container"]}>
        <div className={styles["score-contents"]}>
          <span id="main-score">76</span>
          <span id="sub-score">of 100</span>
        </div>
      </div>
      <div className={styles["explanation-container"]}>
        <h3>Great</h3>
        <p className={styles["explanation-contents"]}>
          You scored higher than 65% of the people who have taken these tests
        </p>
      </div>
    </div>
  );
}
