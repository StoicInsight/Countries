import { useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Search from "./components/Search/Search";
import Countries from "./components/Countries/Countries";

function App() {  

  const [ countries, SetCountries ] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/region/europe')
      .then(res => res.json())
      .then(data => SetCountries(data.slice(0, 4)))
  },[App])


  console.log("State",countries)

  return (
    <div className="App">
      <Navigation/>
      <Search/>
      <Countries countries={countries}/>
    </div>
  );
}

export default App;
