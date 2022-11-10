import React, { useState } from "react";

const Tour = ({ id, name, image, price, info, removeTour }) => {
  const [readAction, setRead] = useState(true);

  return (
    <div className="tour">
      <h2>{name}</h2>
      <h4>Price: ${price}</h4>
      <img src={image} alt="none"></img>
      <p>
        {readAction ? info.substring(0, 200) + "..." : info}
        <button onClick={() => setRead(!readAction)}>
          {readAction ? "Read More" : "Show Less"}
        </button>
      </p>

      <div className="btn-act-container">
        <button
          onClick={() => {
            removeTour(id);
          }}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
