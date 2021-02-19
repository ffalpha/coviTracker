import React, { useState, useEffect } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api/index";
import style from "./App.css";
function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    async function getdata() {
      const doc = await fetchData();
      setData(doc);
    }

    getdata();
  }, []);

  return (
    <div className="App container">
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
