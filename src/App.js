import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Weather from "./pages/weather";
import DailyTrend from "./pages/DailyTrend";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/weather" element={<Weather />} exact={true} />
        <Route path="/daily-trends" element={<DailyTrend />} exact={true} />
      </Routes>
    </div>
  );
}

export default App;
