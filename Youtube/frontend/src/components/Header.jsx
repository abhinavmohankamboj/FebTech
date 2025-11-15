import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaBell, FaSearch, FaPlus, FaMicrophone } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";

const Header = ({ onSearch, darkMode, setDarkMode, selectedCategory, setSelectedCategory }) => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      if (raw) setUser(JSON.parse(raw));
    } catch (e) {
      setUser(null);
    }
  }, []);

  const categories = [
    "all",
    "gaming",
    "thrillers",
    "podcasts",
    "dramedy",
    "music",
    "comedy",
    "education",
    "news",
    "sports",
    "Entertainment",
    "Devotional"

  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "" && onSearch) onSearch(query);
  };

  return (
    <>
      <header className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 shadow sticky top-0 z-50">

        <div className="flex items-center gap-2">
          <FaYoutube className="text-red-600 text-3xl" />
          <span className="text-xl font-bold text-black dark:text-white">YouTube</span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex border border-gray-300 rounded-full overflow-hidden"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="pl-4 pr-2 py-1 outline-none w-64 dark:bg-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="flex items-center justify-center px-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            <FaSearch className="text-gray-600 dark:text-gray-300" />
          </button>

          <button
            type="button"
            className="p-2 ml-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FaMicrophone className="text-xl text-gray-600 dark:text-gray-300" />
          </button>
        </form>

          <div className="flex items-center gap-4">

          <button
            className="flex items-center gap-1 px-3 py-1 rounded-full border border-gray-300 
                       hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 transition"
            title="Create"
          >
            <FaPlus className="text-sm" />
            <span className="text-sm font-medium">Create</span>
          </button>
          <FaBell className="text-2xl text-black dark:text-white cursor-pointer" />

        

          {/* Always show dark mode toggle; show avatar beside it when available */}
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          {user && user.Avatar && (
            <img
              src={user.Avatar}
              alt="avatar"
              className="w-9 h-9 rounded-full object-cover border border-gray-200"
            />
          )}
        </div>
      </header>

      <div className="bg-white dark:bg-gray-900 shadow-sm sticky top-12 z-40">
        <div className="flex gap-2 overflow-x-auto p-2 px-4">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory && setSelectedCategory(cat)}
                className={`whitespace-nowrap px-3 py-1 rounded-full text-sm font-medium border ${
                  active
                    ? "bg-gray-900 text-white border-gray-900 dark:bg-gray-100 dark:text-black"
                    : "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;