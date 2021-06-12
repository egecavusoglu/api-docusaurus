import React from "react";
import styles from "./Method.module.css";
const Method = ({ method }) => {
  return (
    <label className={`${styles.method} ${styles[method]}`}>{method}</label>
  );
};
export default Method;
