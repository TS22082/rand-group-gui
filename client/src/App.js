import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//components
import AddApprentice from "./pages/AddApprentice/AddApprentice";

import axios from "axios";
import CheckGroups from "./pages/CheckGroups/CheckGroups";
import Lead from "./pages/Lead/Lead"

function App() {
  const [leads, setLeads] = useState([]);
  const [activeLeads, setActiveLeads] = useState([]);

  useEffect(() => {
    axios.get("/api/leads").then((res) =>
      setLeads(
        res.data.map((lead) => {
          return { ...lead, selected: false };
        })
      )
    );
  }, []);

  useEffect(() => {
    setActiveLeads(leads.filter((lead) => lead.selected === true));
  }, [leads]);

  const toggleLead = (index) => {
    const leadsCopy = [...leads];
    leadsCopy[index].selected = !leadsCopy[index].selected;
    setLeads(leadsCopy);
  };

  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <CheckGroups
                activeLeads={activeLeads}
                toggleLead={toggleLead}
                leads={leads}
              />
            }
          />
          <Route path="/addapprentice" element={<AddApprentice />} />
          <Route path="/lead/:id" element={<Lead />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
