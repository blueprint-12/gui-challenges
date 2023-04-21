import React from "react";
import styles from "./ListItem.module.scss";
import classNames from "classnames";

export default function ListItem({
  category,
  score,
  icon,
  bgColor,
  fontColor,
}) {
  const backgroundColor = bgColor || "#fff";
  const categoryClassName = classNames(styles["item-topic"], {
    [styles.red]: fontColor === "red",
    [styles.orange]: fontColor === "orange",
    [styles.green]: fontColor === "green",
    [styles.blue]: fontColor === "blue",
  });

  return (
    <div className={styles["item-container"]} style={{ backgroundColor }}>
      <div className={categoryClassName}>
        <img src={icon} alt={category} />
        {category}
      </div>
      <div className={styles["item-score"]}>
        <span>{score}</span>&nbsp; / 100
      </div>
    </div>
  );
}
