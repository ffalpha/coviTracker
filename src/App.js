import { Cards, Chart, CountryPicker } from "./components";
import style from "./App.css";
function App() {
  return (
    <div className="App container">
      <Cards />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
