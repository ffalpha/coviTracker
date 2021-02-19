import React, { useState, useEffect } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api/index";
import style from "./App.css";
function App() {
  const [data, setData] = useState({});

  useEffect(async () => {
    const doc = await fetchData();
    setData(doc);
    return () => console.log("unmounting...");
  }, [data]);
  return (
    <div className="App container">
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
