import React from "react";
import axios from "axios";

const url = "https://covid19.mathdro.id/api";

//gettin data
export const fetchData = async () => {
  try {
    //destructing method
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    // const modifeiedData = {
    //   confirmed: data.confirmed,
    //   recovered: data.recovered,
    //   deaths: data.deaths,
    //   lastUpdate: data.lastUpdate,
    // };

    const modifeiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
    return modifeiedData;
  } catch (error) {
    console.log(error.message);
  }
};
