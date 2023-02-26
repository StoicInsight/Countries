import { React, useState, useEffect } from 'react'
import './Countries.styles.scss'
import CountryItem from '../Country-Item/Country-Item'
import Search from '../Search/Search'

const Countries = ({countries}) => {

  return (
    <div className='countries-wrap'>
      <CountryItem countries={countries}/>
    </div>
  )
}

export default Countries