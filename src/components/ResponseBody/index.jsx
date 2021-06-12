import React from "react";
import styles from "./ResponseBody.module.css";
import Code from "../Code";

const RequestBody = ({ body }) => {
  return (
    <main className={styles.container}>
      <p className={styles.title}>Response Body</p>
      <Code code={body} />
    </main>
  );
};
export default RequestBody;
