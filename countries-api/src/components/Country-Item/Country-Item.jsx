import React from 'react'
import './Country-item.style.scss'

const CountryItem = ({countries}) => {
  return (
    <div className='country-item-wrap'>
      {countries.map((country) => {
        return (
          <div className='country-item'>
            <img src={country.flags.svg} className='country-img' alt="" />
            <div className="country-text">
              <h1>{country.capital[0]}</h1>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CountryItem