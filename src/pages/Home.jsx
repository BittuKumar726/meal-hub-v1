import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    // Main container with flexbox properties to align content vertically and horizontally
    <div
      className="flex justify-evenly flex-col items-center container"
      style={{ minHeight: "70%" }}
    >
      {/* Page title */}
      <h1 className="text-3xl text-center font-bold text-white">
        Welcome to Meal hub
      </h1>

      {/* Container for the navigation links */}
      <div className="flex flex-col justify-center items-center gap-10">
        {/* Row of navigation links */}
        <div className="flex justify-center items-center gap-12">
          {/* Link to the Menu page */}
          <div>
            <Link
              to="/menu"
              className="mt-4 w-20 h-10 border-solid border-2 border-sky-500 bg-sky-100 hover:bg-white px-8 py-2 rounded"
            >
              Menu
            </Link>
          </div>

          {/* Link to the Favorites page */}
          <div>
            <Link
              to="/favorites"
              className="mt-4 w-10 h-10 border-solid border-2 border-sky-500 bg-sky-100 hover:bg-white px-4 py-2 rounded"
            >
              Favourite
            </Link>
          </div>
        </div>

        {/* Link to the Random Meal page */}
        <div>
          <Link
            to="/random"
            className="mt-4 w-10 h-10 border-solid border-2 border-sky-500 bg-sky-100 hover:bg-white px-4 py-2 rounded"
          >
            Random Meal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
