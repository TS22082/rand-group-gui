import React, { useState, useEffect } from "react";
import axios from "axios";
import "./lead.css";

const Lead = () => {
  const [leadId, setLeadId] = useState("");

  useEffect(() => {
    axios.get("/api/appr4leads").then((res) => console.log("result ===>", res));
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(leadId);
    axios
      .get(`/api/appr4leads?id=${leadId}`)
      .then((response) => console.log(response));
  };

  return (
    <div className="lead-form-container">
      <form onSubmit={onSubmit}>
        <input
          onChange={(event) => {
            setLeadId(event.target.value);
          }}
          type="text"
        />
        <button type="submit">Check</button>
      </form>
    </div>
  );
};

export default Lead;
