import React from "react";
import { SERVER_URL } from "../../config";
import "./style.css";
import Prism from "prismjs";
// import "prismjs/themes/prism-tomorrow.css";

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
    <div className="">
      <div className="container">
        <p>{children}</p>
      </div>
      <div className="container">
        <label className={`method ${method}`}>{method}</label>
        {requiresToken && <code className="auth-pre">TOKEN</code>}
        <code className="server-url">{`${SERVER_URL}${url}`}</code>
      </div>
      {requestBody && (
        <div className="container">
          <p className="title">Request Body</p>
          <pre>
            <code className="language-js">
              {JSON.stringify(requestBody, null, 2)}
            </code>
          </pre>
        </div>
      )}
      {responseBody && (
        <div className="container">
          <p className="title">Response Body</p>
          <pre>
            <code className="language-js">
              {JSON.stringify(responseBody, null, 2)}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
};
export default Endpoint;
