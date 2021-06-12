import React from "react";
import styles from "./ServerUrl.module.css";
import { SERVER_URL } from "../../config";

const ServerUrl = ({ url }) => {
  return <code className={styles.server_url}>{`${SERVER_URL}${url}`}</code>;
};
export default ServerUrl;
