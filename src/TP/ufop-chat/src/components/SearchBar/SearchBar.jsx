import { useRef } from 'react'
import './style.css'
import Arrow from '../../assets/arrow.svg'


/**
 * 
 * @param inputCB is a callback function to handle input in search bar when pressed send / enter.
 */
function SearchBar({ inputCB }) {

  const searchBarRef = useRef();

  const handleClickOrEnter = () => {
    const inputValue = searchBarRef.current.value;

    if (typeof inputCB === 'function' && inputValue.trim().length > 0) {
      inputCB(inputValue);
      searchBarRef.current.value = '';
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClickOrEnter();
    }
  };

  return (
    <div className='searchbar'>
      <input className='searchbar-input' placeholder='Faça uma pergunta...' onKeyUp={handleKeyPress} ref={searchBarRef} />
      <img src={Arrow} className='arrow' onClick={handleClickOrEnter}></img>
    </div>
  );
}

export default SearchBar
