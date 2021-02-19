import React, { useState, useEffect } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api/index";
import style from "./App.css";
function App() {
  const [data, setData] = useState({});
  const [selectedcountry, setSelectedCountry] = useState(null);
  //Getting data
  useEffect(() => {
    async function getdata() {
      setData(await fetchData());
    }
    getdata();
  }, []);

  //geting by country
  useEffect(() => {
    async function getdatabycountry() {
      setData(await fetchData(selectedcountry));
    }
    getdatabycountry();
  }, [selectedcountry]);

  return (
    <div className="App container">
      <Cards data={data} />
      <CountryPicker setSelectedCountry={setSelectedCountry} />
      <Chart data={data} country={selectedcountry} />
    </div>
  );
}

export default App;
