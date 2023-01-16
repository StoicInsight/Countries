import { React, useState, useEffect } from 'react'
import './Countries.styles.scss'
import CountryItem from '../Country-Item/Country-Item'
import Search from '../Search/Search'

const Countries = ({countries, filter}) => {

  return (
    <div className='countries-wrap'>
      <Search filter={filter}/>
      <CountryItem countries={countries}/>
    </div>
  )
}

export default Countries