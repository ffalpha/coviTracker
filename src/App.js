import React, { useState, useEffect } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api/index";
import style from "./App.css";
function App() {
  const [data, setData] = useState({});
  const [selectedcountry, setSelectedCountry] = useState(null);
  useEffect(() => {
    async function getdata() {
      const doc = await fetchData();
      setData(doc);
    }

    getdata();
  }, []);
  console.log(selectedcountry);
  return (
    <div className="App container">
      <Cards data={data} />
      <CountryPicker setSelectedCountry={setSelectedCountry} />
      <Chart />
    </div>
  );
}

export default App;
