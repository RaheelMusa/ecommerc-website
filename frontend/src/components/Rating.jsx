import React, { useEffect, useState } from "react";

const RatingFilter = ({ onRatingFilterApply, onResetFilter }) => {
  const [rating, setRating] = useState("");

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };
  const handleFilterApply = () => {
    onRatingFilterApply(rating);
  };
  useEffect(() => {
    if (rating === "") {
      // Trigger showing all products when the rating is empty
      onResetFilter();
    }
  }, [rating, onResetFilter]);

  return (
    <div>
      <div className="flex flex-col gap-3 items-center justify-center my-3">
        <label>Rating:</label>
        <input
          type="text"
          className="outline-none w-[50px] px-2 shadow-md border-2 border-black border-opacity-30"
          value={rating}
          onChange={(e) => handleRatingChange(e.target.value)}
        />
        <button
          onClick={handleFilterApply}
          className="w-full bg-blue-400 p-2 rounded-md hover:bg-blue-600 text-white hover:duration-300 hover:ease-in-out delay-100"
        >
          Apply Rating Filter
        </button>
      </div>
    </div>
  );
};

export default RatingFilter;
