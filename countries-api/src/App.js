import { useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Search from "./components/Search/Search";
import Countries from "./components/Countries/Countries";

function App() {  

  const [ searchField, setSearchField ] = useState('')
  const [ countries, SetCountries ] = useState([])
  const [ filteredCountries, setFilteredCountries ] = useState(countries)

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => SetCountries(data.slice(0, 40)))
  },[])


  useEffect(() => {
    const filteredCountries = countries.filter((country) => {
      return country.capital[0].toLocaleLowerCase().includes(searchField)
    })

    setFilteredCountries(filteredCountries)
  },[countries, searchField])

  console.log("Countries", countries)
  console.log("FIlerered", filteredCountries)

  const searchFieldInput = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
  }
  

  // console.log("Filtered",filteredCountries)

  return (
    <div className="App">
      <Navigation/>
      <Search filter={searchFieldInput}/>
      <Countries countries={filteredCountries} />
    </div>
  );
}

export default App;
