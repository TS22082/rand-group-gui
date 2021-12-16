import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Lead = () => {
  const [uid, setId] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setId(id);
  }, []);

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

export default Lead;
