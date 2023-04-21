import React from "react";
import styles from "./Card.module.scss";
import ListItem from "../list-item/ListItem";
import list from "../../data.json";

export default function Card({ isSummary }) {
  if (!isSummary)
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
  else {
    return (
      <div className={styles["summary-card"]}>
        <h4 id={styles["summary-title"]}>Summary</h4>
        <div className={styles["summary-list"]}>
          {list.map((item) => (
            <ListItem
              key={item.category}
              category={item.category}
              score={item.score}
              icon={item.icon}
              bgColor={item.bgColor}
              fontColor={item.fontColor}
            />
          ))}
        </div>
        <div className={styles["summary-btn-container"]}>
          <button id={styles["continue-btn"]}>Continue</button>
        </div>
      </div>
    );
  }
}
