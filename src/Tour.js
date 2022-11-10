import React from "react";

const Tour = ({ id, name, image, price, info, removeTour }) => {
  return (
    <div className="tour">
      <h2>{name}</h2>
      <img src={image} alt="none"></img>
      <p>{info}</p>
      <h4>Price: ${price}</h4>
      <div className="btn-act-container">
        <button
          onClick={() => {
            removeTour(id);
          }}
        >
          Not interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
