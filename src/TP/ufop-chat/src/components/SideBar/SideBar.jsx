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
      <div className='page-content'>
        <span>
          {content.chat[0].text}
        </span>
      </div>
    </div>
  );

}

const LeftBar = () => {
  const [pages, setPages] = useState(Object.keys(sessionStorage));

  useEffect(() => {
    const handleStorageChange = () => {
      // Update pages whenever sessionStorage changes
      setPages(Object.keys(sessionStorage));
      console.log("new-page-created")
    };

    // Add event listener for changes in sessionStorage
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render


  return (
    <div className='sidebar leftbar'>
      <button className='new-chat'><AddIcon />Novo chat</button>

      <section className="log">
        <p>Hoje</p>
        {pages.map((page, idx) => {
          let page_content = JSON.parse(sessionStorage.getItem(page));
          return <PageContainer content={page_content} key={"page-" + idx} />
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
