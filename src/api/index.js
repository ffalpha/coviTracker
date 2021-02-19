import axios from "axios";

const url = "https://covid19.mathdro.id/api";

//getting data
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

export const fetchDailyDate = async () => {
  try {
    //destructing method
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchcountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error.message);
  }
};
