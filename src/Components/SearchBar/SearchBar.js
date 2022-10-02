import React from 'react'
import './SearchBar.scss'
import { BiSearch } from "react-icons/bi";

const SearchBar = ({onChangeEvent, onSubmitEvent, value}) => {
  return (
    <form onSubmit={onSubmitEvent}>
      <input placeholder='Search here..' className='searchBar' onChange={onChangeEvent} value= {value}/>
      <button><BiSearch/></button>
    </form>
  )
}

export default SearchBar