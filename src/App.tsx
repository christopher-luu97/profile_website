import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { CommandPalette } from "./components/CommandPalette/CommandPalette";
import { useReveal } from "./hooks/useReveal";
import Blog from "./components/Blog/Blog";
import BlogPost from "./components/Blog/BlogPost";
// import Projects from "./components/Pages/Projects";

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
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
