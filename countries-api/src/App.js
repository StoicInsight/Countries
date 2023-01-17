import { useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Search from "./components/Search/Search";
import Countries from "./components/Countries/Countries";

function App() {  

  const [ search, setSearch ] = useState('')
  const [ countries, SetCountries ] = useState([])
  const [ filteredCountries, setFilteredCountries ] = useState(countries)

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => SetCountries(data.slice(0, 30)))
  },[App])

  // useEffect(() => {
  //   const filteredCountries = countries.filter((country) => {
  //     return country.subregion.toLocaleLowerCase().includes(search)
  //   })

  //   setFilteredCountries(filteredCountries)
  // },[Countries])
  console.log("Countries", countries)
  console.log("FIlerered", filteredCountries)

  // const searchField = (e) => {
  //   const searchFieldString = e.target.value.toLocaleLowerCase()
  //   setSearch(searchFieldString)
  // }
  

  // console.log("Filtered",filteredCountries)

  return (
    <div className="App">
      <Navigation/>
      {/* <Search filter={searchField}/>
      <Countries countries={filteredCountries} filter={searchField}/> */}
    </div>
  );
}

export default App;
