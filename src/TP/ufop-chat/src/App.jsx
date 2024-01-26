import { useEffect, useState, useRef } from 'react'
import Itacolomi from './assets/Itacolomi.svg'

import './App.css'
import SideBar from './components/SideBar/SideBar';
import SearchBar from './components/SearchBar/SearchBar';

const CentralArea = () => {
  // const searchBarRef = useRef();

  // useEffect(() => {
  //   const handleDocumentClick = (event) => {
  //     // Check if the clicked element is inside the SearchBar component
  //     if (searchBarRef.current && searchBarRef.current.contains(event.target)) {
  //       // Handle the click inside the SearchBar
  //       console.log("clicked inside");
  //     }
  //   };

  //   document.addEventListener('click', handleDocumentClick);

  //   return () => {
  //     document.removeEventListener('click', handleDocumentClick);
  //   };
  // }, [searchBarRef]);


  return <div className='central'>

    <h1> Seu ajudante pessoal de resoluções da <br /> <span className='UFOP-Name'>UFOP</span></h1>
    {/* <SearchBar ref={searchBarRef} /> */}
    <SearchBar inputCB={(input) => console.log(input + " was the input")} />

  </div>
}

function App() {
  return (
    <div className='outter-main'>
      <img src={Itacolomi} className='mountains-BG' />
      <div className='main'>
        <SideBar side='left' />
        <CentralArea />
        <SideBar side='right' />
      </div>
    </div>
  )
}

export default App
