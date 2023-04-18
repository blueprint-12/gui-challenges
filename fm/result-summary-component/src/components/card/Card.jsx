import React from "react";
import styles from "./Card.module.scss";
export default function Card() {
  return (
    <div className={styles["card"]}>
      <h4>Your Result</h4>
      <div className={styles["card-score"]}>
        <span className="">76</span>
        <span className="">of 100</span>
      </div>
      <div>
        <h3>Great</h3>
        <p className={styles["card-score__explanation"]}>
          You scored higher than 65% of the people who have taken these tests
        </p>
      </div>
    </div>
  );
}
