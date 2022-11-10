import React from "react";
import Tour from "./Tour";

const Tours = ({ arr }) => {
  return arr.map((tour) => {
    return (
      <Tour
        key={tour.id}
        name={tour.name}
        image={tour.image}
        price={tour.price}
      ></Tour>
    );
  });
};

export default Tours;
