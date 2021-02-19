import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.css";
import { fetchcountries } from "../../api/index";

function CountryPicker({ setSelectedCountry }) {
  const [countries, setCountries] = useState([]);

  //getting data
  useEffect(() => {
    async function getCountires() {
      setCountries(await fetchcountries());
    }
    getCountires();
  }, [setCountries]);

  return (
    <FormControl>
      <NativeSelect
        defaultValue=""
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="global">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
