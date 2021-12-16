import React, { useState, useEffect } from "react";
import axios from "axios";
import "./lead.css";

const Lead = () => {
  const [leadId, setLeadId] = useState("");

  useEffect(() => {
    axios.get("/api/appr4leads").then((res) => console.log("result ===>", res));
  }, []);

  return (
    <div className="lead-form-container">
      <form>
        <input type="text" />
      </form>
      <button>Check</button>
    </div>
  );
};

export default Lead;
