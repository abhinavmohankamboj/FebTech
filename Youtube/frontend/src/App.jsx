import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DarkModeToggle from "./components/DarkModeToggle";
import Home from "./components/Pages/Home";
import Shorts from "./components/Pages/shorts.jsx"
import Subscriptions from "./components/Pages/Subscriptions";
import Downloads from "./components/Pages/Downloads";
import SearchResults from "./components/Pages/Searchresults";
import AuthPage from "./components/Pages/AuthPage";


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch (e) {
      return false;
    }
  });

  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Router>
      <div
        className={
          darkMode
            ? "dark bg-gray-900 text-white min-h-screen"
            : "bg-white text-black min-h-screen"
        }
      >
        {/* Header Section */}
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

      

        {/* Main Layout */}
        <div className="flex">
          {/* Sidebar */}
          <Sidebar />

          {/* Page Content */}
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home selectedCategory={selectedCategory}/>} />
              <Route path="/shorts" element={<Shorts />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/search/:query" element={<SearchResults />} />
              <Route path="/login" element={<AuthPage/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
