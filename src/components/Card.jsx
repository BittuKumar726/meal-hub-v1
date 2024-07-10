import React, { useState } from "react";
import { Heart, Star } from "react-feather"; // Feather icons
import { useFavorites } from "./ContextApi";
import Tooltip from "./Tooltip";

const CardComponent = ({ meal }) => {
  // Accessing favorites context
  const { toggleFavourite, isFavorite } = useFavorites();

  // State to manage tooltip visibility
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white h-full">
      {/* Meal image section */}
      <div className="relative">
        <img className="w-full" src={meal.strMealThumb} alt={meal.strMeal} />
        {/* Heart icon for favorite, with tooltip */}
        <div className="absolute top-2 right-2">
          <div
            onMouseOver={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative flex items-center"
          >
            {/* Tooltip for favorite icon */}
            {showTooltip && (
              <Tooltip
                text={
                  isFavorite(meal?.idMeal)
                    ? "Remove from favorites"
                    : "Add to favorites"
                }
                position="top-8 right-0"
              />
            )}
            {/* Heart icon toggles favorite status */}
            {isFavorite(meal?.idMeal) ? (
              <Heart
                className="text-red-500 cursor-pointer"
                onClick={() => toggleFavourite(meal)}
                fill="red"
              />
            ) : (
              <Heart
                className="text-gray-500 cursor-pointer"
                onClick={() => toggleFavourite(meal)}
              />
            )}
          </div>
        </div>
      </div>
      {/* Meal information section */}
      <div className="flex justify-between py-2">
        <div className="px-3">
          {/* Meal name */}
          <div className="font-bold text-xl">{meal?.strMeal}</div>
          {/* Meal category or default description */}
          <p className="text-gray-700 text-base">
            {meal?.strCategory || "Meal description"}
          </p>
        </div>
        {/* Rating section */}
        <span style={{ margin: "5px 5px", display: "flex" }}>
          <Star className="text-yellow-500" size={18} fill={"#eab308"} />
          <span className="ml-1 text-gray-700 font-bold">4.5</span>
        </span>
      </div>
    </div>
  );
};

export default CardComponent;
