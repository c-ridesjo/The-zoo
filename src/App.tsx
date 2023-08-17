import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnimalPage from "./pages/AnimalPage";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/animal/:id" element={<AnimalPage></AnimalPage>} />
    </Routes>
  </Router>
);

export default App;
