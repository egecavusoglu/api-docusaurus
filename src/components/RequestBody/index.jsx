import React from "react";
import styles from "./RequestBody.module.css";
import Highlight, { defaultProps } from "prism-react-renderer";

import Code from "../Code";

const RequestBody = ({ body }) => {
  return (
    <main className={styles.container}>
      <p className={styles.title}>Request Body</p>
      <Code code={body} />
    </main>
  );
};
export default RequestBody;
