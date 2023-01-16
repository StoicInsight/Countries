import {useState, useEffect} from 'react'
import './Search.scss'

const Search = ({filter}) => {

  return (
    <div className='search'>
      <input 
        type="search"
        placeholder='Search For Countries'
        className='search-bar'
        onChange={filter}
      />
    </div>
  )
}

export default Search