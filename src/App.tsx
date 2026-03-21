import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { LandingPage } from "./components/LandingPage/LandingPage";
// import Projects from "./components/Pages/Projects";
// import Blog from "./components/Pages/Blog";

function App() {
  return (
    <div className="kh-app">
      <div className="kh-app__bg" />

      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
