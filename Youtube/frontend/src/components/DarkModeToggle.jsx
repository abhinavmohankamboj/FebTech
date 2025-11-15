import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function DarkModeToggle({ darkMode, setDarkMode }) {
  const toggleMode = () => {
    if (typeof setDarkMode === "function") setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleMode}
      className="text-2xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {darkMode ? <FaSun className="text-gray-400" /> : <FaMoon className="text-gray-600" />}
    </button>
  );
}

export default DarkModeToggle;