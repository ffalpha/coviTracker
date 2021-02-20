import React, { useState, useEffect } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api/index";
import style from "./App.css";
import logo from "./img/logo.png";
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
      <div className="background-image"></div>
      <div className="bg">
        <img src={logo} alt="covid" className="image" />
        <CountryPicker setSelectedCountry={setSelectedCountry} />
        <Cards data={data} />
        <Chart data={data} country={selectedcountry} />
      </div>
    </div>
  );
}

export default App;
