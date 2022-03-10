import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// pages
import Dashboard from "./pages/Dashborad";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:listId" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/0" />} />
      </Routes>
    </div>
  );
}

export default App;
