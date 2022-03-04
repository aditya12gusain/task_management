import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Dashboard from "./pages/Dashborad";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
