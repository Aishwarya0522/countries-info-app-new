import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";  // Ensure this path is correct
import CountryPage from "./pages/CountryPage";  // Ensure this path is correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryCode" element={<CountryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
