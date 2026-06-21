import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { CommandPalette } from "./components/CommandPalette/CommandPalette";
import { useReveal } from "./hooks/useReveal";
// import Projects from "./components/Pages/Projects";
// import Blog from "./components/Pages/Blog";

function App() {
  useReveal();
  return (
    <div className="kh-app">
      <div className="kh-app__bg" />
      <div className="kh-grain" aria-hidden="true" />
      <div className="kh-aurora" aria-hidden="true">
        <div className="kh-aurora__blob kh-aurora__blob--1" />
        <div className="kh-aurora__blob kh-aurora__blob--2" />
        <div className="kh-aurora__blob kh-aurora__blob--3" />
      </div>

      <CommandPalette />
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
