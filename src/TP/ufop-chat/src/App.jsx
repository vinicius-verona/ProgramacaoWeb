import { useEffect, useState } from 'react'
import Itacolomi from './assets/Itacolomi.svg'

import './App.css'
import SideBar from './components/SideBar/SideBar';

const CentralArea = () => {
  return <div className='central'>

    <h1> Seu ajudante pessoal de resoluções da <br /> <span className='UFOP-Name'>UFOP</span></h1>

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
