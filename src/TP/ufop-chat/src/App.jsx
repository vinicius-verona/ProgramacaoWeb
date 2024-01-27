import { useEffect, useState, useRef } from 'react'
import Itacolomi from './assets/Itacolomi.svg'

import './App.css'
import SideBar from './components/SideBar/SideBar';
import SearchBar from './components/SearchBar/SearchBar';
import Chat, { createNewChat, getInputAnswer } from './components/Chat/Chat';


const CentralArea = () => {

  const [isInChat, setIsInChat] = useState(false);
  const [chatPageContent, setChatPageContent] = useState(undefined);

  const handleChat = async (input) => {
    if (!isInChat) {
      const chat = await createNewChat(input);
      if (chat !== null) {
        setChatPageContent(chat);
        setIsInChat(true);
      }

    } else {
      try {
        const msg = await getInputAnswer(input, chatPageContent.id);

        // Given a new msg, update the chat log for the page, initially, creates a shallow copy of the 
        // previous state and than update the log in state.chat
        setChatPageContent(prevChat => ({
          ...prevChat,
          chat: [...prevChat.chat, ...msg]
        }));

      } catch (error) {
        console.error("Error getting input answer:", error);
      }
    }
  };


  return <div className='central'>

    <h2 className='top-title'>Chat <span className='UFOP-title'>UFOP</span></h2>

    {!isInChat ?
      (<h1> Seu ajudante pessoal de resoluções da <br /> <span className='UFOP-Name'>UFOP</span></h1>) :
      (<Chat content={chatPageContent} />)
    }

    <SearchBar inputCB={handleChat} />

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
