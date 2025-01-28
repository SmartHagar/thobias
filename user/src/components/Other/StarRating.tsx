/** @format */

import React, { useState } from "react";

interface StarRatingProps {
  totalStars?: number;
  onChangeRating: (rating: number) => void;
  name: string; // Tambahkan prop name
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  onChangeRating,
  name,
}) => {
  const [rating, setRating] = useState(1);

  const handleSetRating = (index: number) => {
    setRating(index);
    onChangeRating(index);
  };

  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          selected={index < rating}
          onClick={() => handleSetRating(index + 1)}
          name={`${name}-${index + 1}`} // Gunakan prop name untuk memberikan nama unik
        />
      ))}
    </div>
  );
};

interface StarProps {
  selected: boolean;
  onClick: () => void;
  name: string;
}

const Star: React.FC<StarProps> = ({ selected, onClick }) => {
  return (
    <div
      className={`cursor-pointer text-2xl ${
        selected ? "text-yellow" : "text-secondary2"
      }`}
      onClick={onClick}
    >
      ★
    </div>
  );
};

export default StarRating;
