import React from 'react'
import './Countries.styles.scss'
import CountryItem from '../Country-Item/Country-Item'

const Countries = ({countries}) => {
  return (
    <div className='countries-wrap'>
      <CountryItem countries={countries}/>
    </div>
  )
}

export default Countries