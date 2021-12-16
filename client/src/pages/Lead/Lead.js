import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Lead = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
    axios.get("/api/appr4leads").then((res) => console.log("result ===>", res));
  }, []);

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

export default Lead;
