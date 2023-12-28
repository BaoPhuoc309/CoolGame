import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import "./StarRating.scss";

interface Star {
  rating: number;
}

const StarRating: React.FC<Star> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, idx) => {
    const val = idx + 0.5;
    return (
      <li key={idx}>
        {rating >= idx + 1 ? (
          <BsStarFill />
        ) : rating > val ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </li>
    );
  });

  return (
    <div className="star-wrapper rating d-flex align-items-start text-green">
      {stars}
    </div>
  );
};

export default StarRating;
