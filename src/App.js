import React, { useState, useEffect } from "react";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState("");

  const fetchTours = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setLoading(false);
    setTours(data);
    console.log(data);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return loading ? <h2>stil loading</h2> : <Tours arr={tours}></Tours>;
}

export default App;
