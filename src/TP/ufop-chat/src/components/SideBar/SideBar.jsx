import { useEffect, useState } from 'react'
import './style.css'
import UFOP from '../../assets/ufop.jpg'
import FB from '../../assets/facebook.svg'
import IG from '../../assets/instagram.svg'
import WWW from '../../assets/www.svg'
import AddIcon from '../../assets/add-icon'
import PageIcon from '../../assets/page-icon'

const PageContainer = ({ content }) => {

  return (
    <div className="page-container">
      {/* <PageIcon svgClassName="page-icon" /> */}
      {/* <span> */}
      {content.chat[0].text}
      {/* </span> */}
    </div>
  );

}

const LeftBar = () => {
  const [pages, setPages] = useState(Object.keys(sessionStorage));

  // const handleNewPage = () => {
  //   setPages(prevPages => [...pages, ])
  // }

  return (
    <div className='sidebar leftbar'>
      <button className='new-chat'><AddIcon /> Novo chat</button>

      <section className="log">
        <p>Hoje</p>
        {pages.map(page => {
          let page_content = JSON.parse(sessionStorage.getItem(page));
          return <PageContainer content={page_content} />
        })}
      </section>
    </div>
  )
}

const RightBar = () => {
  return (
    <div className='sidebar rightbar'>
      <img src={UFOP} className='logo' />
      <section className='social-network-section'>
        <a href='https://www.facebook.com/minhaUFOP' > <img src={FB} className='sn-logo' /></a>
        <a href='https://www.instagram.com/minhaufop' > <img src={IG} className='sn-logo' /></a>
        <a href='https://www.ufop.br' > <img src={WWW} className='sn-logo' /></a>
      </section>
    </div>
  )
}


function SideBar({ side }) {
  if (side.toLowerCase() === 'left')
    return <LeftBar />
  else
    return <RightBar />
}

export default SideBar
