import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const StarCreator = props => {
  const stars = props.stars;
  let complete = 0;
  let half = 0;
  let empty = 0;
  const finallStars = [];
  if (stars % 2 === 0) {
    complete = stars / 2;
    half = 0;
  } else {
    complete = Math.floor(stars / 2);
    half = 1;
  }
  empty = 5 - (complete + half);
  for (let i = 0; i < complete; i++) {
    finallStars.push(<StarIcon />);
  }
  if (half === 1) {
    finallStars.push(<StarHalfIcon />);
  }

  for (let i = 0; i < empty; i++) {
    finallStars.push(<StarBorderIcon />);
  }
  return (
    <>
      {finallStars.map((star, index) => {
        return <span key={index}>{star}</span>;
      })}
    </>
  );
};
export default StarCreator;
