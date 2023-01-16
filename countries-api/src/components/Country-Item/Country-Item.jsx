import React from 'react'
import './Country-item.style.scss'

const CountryItem = ({countries}) => {
  return (
    <div className='country-item-wrap'>
      {countries.map((country) => {
        return (
          <div className='country-item'>
            <img src={country.flags.png} className='country-img' alt="" />
            <div className="country-text">
              <h1>{country.capital[0]}</h1>
              <p>Population: {country.population}</p>
              <p>Region: {country.continents[0]}</p>
              <p>Capital : {country.capital}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CountryItem