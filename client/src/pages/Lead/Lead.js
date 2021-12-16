import React, { useEffect } from "react";
import axios from "axios";
import "./lead.css";

const Lead = () => {
  useEffect(() => {
    axios.get("/api/appr4leads").then((res) => console.log("result ===>", res));
  }, []);

  return <div></div>;
};

export default Lead;
