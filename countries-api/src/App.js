import { useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Search from "./components/Search/Search";
import Countries from "./components/Countries/Countries";

function App() {  

  const [ countries, SetCountries ] = useState([])
  const [ filter, setFilter ] = useState(countries)

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => SetCountries(data.slice(0, 10)))
  },[App])

  const filterCountries = async(e) => {
    const filtered = e.target.value

    const filteredCountry = countries.map((country) => {
      country.capital[0].includes((filtered))
    })

    setFilter(filteredCountry)

    console.log("filter",filteredCountry)
  }


  console.log("State",countries)

  return (
    <div className="App">
      <Navigation/>
      <Countries countries={countries} filter={filterCountries}/>
    </div>
  );
}

export default App;
