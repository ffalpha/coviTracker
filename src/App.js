import React, { useState, useEffect } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api/index";
import style from "./App.css";
function App() {
  const [data, setData] = useState({});
  const [selectedcountry, setSelectedCountry] = useState(null);
  const [selectedcountrydata, setSelectedCountryData] = useState({});
  //Getting data
  useEffect(() => {
    async function getdata() {
      const doc = await fetchData();
      setData(doc);
    }
    getdata();
  }, []);

  //geting by country
  useEffect(() => {
    async function getdatabycountry() {
      setSelectedCountryData(await fetchData(selectedcountry));
    }
    getdatabycountry();
    console.log(selectedcountrydata);
  }, [selectedcountry]);
  console.log();
  return (
    <div className="App container">
      <Cards data={data} />
      <CountryPicker setSelectedCountry={setSelectedCountry} />
      <Chart />
    </div>
  );
}

export default App;
