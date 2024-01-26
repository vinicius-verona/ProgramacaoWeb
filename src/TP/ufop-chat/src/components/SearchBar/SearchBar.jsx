import { useEffect, useState } from 'react'
import './style.css'
import Arrow from '../../assets/arrow.svg'

function SearchBar() {
  return (
    <div className='searchbar'>
      <input className='searchbar-input' placeholder='Faça uma pergunta...' />
      <img src={Arrow} className='arrow'></img>
    </div>
  );
}

export default SearchBar
