import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Register from "./pages/Register";
import List from "./pages/List";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  );
};

export default App;