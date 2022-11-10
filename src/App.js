import React, { useState, useEffect } from "react";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState("");

  const removeTour = (id) => {
    setTours(
      tours.filter((tour) => {
        return tour.id !== id;
      })
    );
  };

  const fetchTours = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setTours(data);
    console.log(data);

    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return loading ? (
    <h2>loading</h2>
  ) : (
    <Tours removeTour={removeTour} arr={tours}></Tours>
  );
}

export default App;
