import React from 'react'
import './Countries.styles.scss'

const Countries = ({countries}) => {
  return (
    <div className='countries-wrap'>
      {countries.map((country) => {
        return (
          <div><img/></div>
        )
      })}
    </div>
  )
}

export default Countries