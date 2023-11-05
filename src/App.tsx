import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { LandingPage } from "./components/LandingPage/LandingPage";
import Projects from "./components/Pages/Projects";
import Blog from "./components/Pages/Blog";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/christopher-luu97.github.io" element={<LandingPage />} />
        <Route
          path="/christopher-luu97.github.io/projects"
          element={<Projects />}
        />
        <Route path="/christopher-luu97.github.io/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
