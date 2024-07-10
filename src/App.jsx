import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNavBar from "./components/SideNavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Meals from "./pages/Meals";
import Favorites from "./pages/Favorites";
import RandomMeal from "./pages/RandomMeal";
import { FavoritesContextProvider } from "./components/ContextApi";

const App = () => {
  return (
    // Provide the FavoritesContext to the entire application
    <FavoritesContextProvider>
      <Router>
        <div className="flex bg-gray-600 gap-16 app-background min-h-screen">
          {/* Side navigation bar */}
          <SideNavBar />

          {/* Main content area */}
          <div className="flex-1">
            {/* Define the routes for the application */}
            <Routes>
              {/* Route for the Home page */}
              <Route path="/" element={<Home />} />
              {/* Route for the Menu page */}
              <Route path="/menu" element={<Menu />} />
              {/* Route for the Meals page, with dynamic category parameter */}
              <Route path="/category/:category" element={<Meals />} />
              {/* Route for the Favorites page */}
              <Route path="/favorites" element={<Favorites />} />
              {/* Route for the RandomMeal page */}
              <Route path="/random" element={<RandomMeal />} />
              {/* Route for the About page */}
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
    </FavoritesContextProvider>
  );
};

export default App;
