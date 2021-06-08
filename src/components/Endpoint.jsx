import React from "react";
import { SERVER_URL } from "../config";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const Endpoint = ({
  method = "GET",
  url = "/",
  requestBody,
  responseBody,
  ...props
}) => {
  console.log(requestBody);
  return (
    <div className="">
      <div className="">
        <label>{method}</label>
        <a>{`${SERVER_URL}${url}`}</a>
      </div>
      <div className="">
        <p>Request Body</p>
        <pre>
          <code className="language-js">
            {JSON.stringify(requestBody, null, 2)}
          </code>
        </pre>
      </div>
      <div className="">
        <p>Response Body</p>
        <pre>
          <code className="language-js">
            {JSON.stringify(responseBody, null, 2)}
          </code>
        </pre>
      </div>
    </div>
  );
};
export default Endpoint;
