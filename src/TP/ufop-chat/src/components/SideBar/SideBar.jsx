import { useEffect, useState } from 'react'
import './style.css'
import UFOP from '../../assets/ufop.jpg'
import FB from '../../assets/facebook.svg'
import IG from '../../assets/instagram.svg'
import WWW from '../../assets/www.svg'
import AddIcon from '../../assets/add-icon'
import { usePages } from '../../Context/PageContext'

const PageContainer = ({ content }) => {
  const { chatPageContent, changePage, ..._ } = usePages();
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    content.id === chatPageContent?.id ? setIsSelected(true) : setIsSelected(false);
  }, [chatPageContent])

  return (
    <div className='page-container' onClick={() => changePage(content)}>
      <div className={'page-content ' + (isSelected ? 'selected' : '')}>
        <span>
          {content.chat[0].text}
        </span>
      </div>
    </div>
  );

}

const LeftBar = ({ toggle }) => {
  const { pages, changePage, ..._ } = usePages();


  const createNewPage = () => {
    changePage(undefined);
  }

  return (
    <div className={'sidebar leftbar' + (toggle ? ' hidden' : ' showMenu')}>
      <button className='new-chat' onClick={createNewPage}><AddIcon svgClassName={'AddIcon'} />Novo chat</button>

      <section className="log">
        <p>Hoje</p>
        {pages.map((page, idx) => {
          let page_content = JSON.parse(sessionStorage.getItem(page.id));
          return <PageContainer content={page_content} key={"page-" + idx} />
        })}
      </section>

      <section className='about'>
        <div className='divider'></div>
        <p>Desenvolvido por <br /><span>Vinicius Verona</span></p>
      </section>
    </div>
  )
}

const RightBar = ({ toggle }) => {
  return (
    <div className={'sidebar rightbar' + (toggle ? ' hidden' : ' showMenu')}>
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

  const { toggleSideBar, toggleMenu, ..._ } = usePages();

  if (side.toLowerCase() === 'left')
    return <>
      <LeftBar toggle={toggleSideBar} />
      {/* Hamburger menu icon */}
      <button className={`toggle ${!toggleSideBar ? ' toggled' : ' '}`} onClick={toggleMenu}>
        <span className={'toggle_icon'}></span>
      </button>
    </>
  else
    return <RightBar toggle={toggleSideBar} />
}

export default SideBar
