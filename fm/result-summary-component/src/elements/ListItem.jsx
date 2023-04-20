import React from "react";
import styles from "./ListItem.module.scss";

export default function ListItem({ category, score, icon, bgColor }) {
  const backgroundColor = bgColor || "#fff";
  return (
    <div className={styles["item-container"]} style={{ backgroundColor }}>
      <div className={styles["item-topic"]}>
        <img src={icon} alt={category} />
        {category}
      </div>
      <div className={styles["item-score"]}>
        <span>{score}</span>&nbsp; / 100
      </div>
    </div>
  );
}
