import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, List, Heart, Shuffle, Info } from "react-feather";

const SideNavBar = () => {
  // State to track whether the navigation bar is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the navigation bar open/close state
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  // Close the navigation bar
  const closeNavBar = () => {
    setIsOpen(false);
  };

  return (
    // Main container with full height
    <div className="flex h-screen">
      {/* Side navigation bar with conditional width based on isOpen state */}
      <div
        className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-gray-700 text-white transition-transform duration-300 transform ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Header section with title and toggle button */}
        <div className="flex items-center justify-between h-16 px-4">
          {/* Title only visible when the nav bar is open */}
          <span className={`text-2xl font-semibold ${!isOpen && "hidden"}`}>
            Meal Hub
          </span>
          {/* Toggle button to open/close the nav bar */}
          <button
            onClick={toggleNavBar}
            aria-label={isOpen ? "Close Navigation" : "Open Navigation"}
            className={`${isOpen ? "ml-auto" : ""}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Navigation links */}
        <nav className="flex-grow mt-4">
          {/* Home link */}
          <Link
            to="/"
            className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700"
            onClick={closeNavBar}
          >
            <Home size={20} />
            <span className={`ml-2 ${!isOpen && "hidden"}`}>Home Page</span>
          </Link>
          {/* Menu link */}
          <Link
            to="/menu"
            className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700"
            onClick={closeNavBar}
          >
            <List size={20} />
            <span className={`ml-2 ${!isOpen && "hidden"}`}>Menu</span>
          </Link>
          {/* Favorites link */}
          <Link
            to="/favorites"
            className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700"
            onClick={closeNavBar}
          >
            <Heart size={20} />
            <span className={`ml-2 ${!isOpen && "hidden"}`}>My Favorites</span>
          </Link>
          {/* Random Meal link */}
          <Link
            to="/random"
            className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700"
            onClick={closeNavBar}
          >
            <Shuffle size={20} />
            <span className={`ml-2 ${!isOpen && "hidden"}`}>Random Meal</span>
          </Link>
        </nav>
        {/* About link positioned at the bottom */}
        <div className="mt-auto px-1 mb-4">
          <Link
            to="/about"
            className="flex items-center py-2.5 px-4 rounded hover:bg-gray-700"
            onClick={closeNavBar}
          >
            <Info size={20} />
            <span className={`ml-2 ${!isOpen && "hidden"}`}>About Me</span>
          </Link>
        </div>
      </div>

      {/* Optional overlay for mobile view */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleNavBar}
        ></div>
      )}
    </div>
  );
};

export default SideNavBar;
