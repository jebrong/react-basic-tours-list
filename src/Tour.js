const Tour = ({ name, image, price }) => {
  return (
    // <>
    //   <h2>{props.name}</h2>
    //   <h2>{props.image}</h2>
    //   <h2>{props.price}</h2>
    //   <h2>This is Tour</h2>
    // </>
    <>
      <h2>{name}</h2>
      <h2>{image}</h2>
      <h2>{price}</h2>
      <h2>This is Tour</h2>
    </>
  );
};

export default Tour;
