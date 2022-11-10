import React from "react";
import Tour from "./Tour";

const Tours = ({ arr, removeTour }) => {
  return arr.map((tour) => {
    return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
  });
};

export default Tours;
