import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "./pages/Header";
import Blogs from "./pages/Blogs";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";

export default function App() {
  return (
    <div
      className="min-h-screen bg-white text-slate-900 font-sans"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <Toaster />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/aboutMe" element={<AboutMe />} />
        </Routes>
      </main>
    </div>
  );
}
