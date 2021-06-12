import React from "react";
import styles from "./Endpoint.module.css";

import Token from "../Token";
import Method from "../Method";
import ServerUrl from "../ServerUrl";
import RequestBody from "../RequestBody";
import ResponseBody from "../ResponseBody";

const Endpoint = ({
  method = "GET",
  url = "/",
  requestBody,
  responseBody,
  requiresToken = false,
  children,
  ...props
}) => {
  return (
    <main>
      <div className={styles.container}>
        <p>{children}</p>
      </div>
      <div className={styles.container}>
        <Method method={method} />
        {requiresToken && <Token />}
        <ServerUrl url={url} />
      </div>
      {requestBody && <RequestBody body={requestBody} />}
      {responseBody && <ResponseBody body={responseBody} />}
    </main>
  );
};
export default Endpoint;
