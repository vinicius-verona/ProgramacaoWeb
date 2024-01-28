import { useEffect, useState, useRef } from 'react'
import Itacolomi from './assets/Itacolomi.svg'

import './App.css'
import SideBar from './components/SideBar/SideBar';
import SearchBar from './components/SearchBar/SearchBar';
import Chat, { createNewChat, getInputAnswer } from './components/Chat/Chat';
import { PagesProvider } from './Context/PageContext';
import { usePages } from './Context/PageContext';


const CentralArea = () => {

  const { _, chatPageContent, updatePages, changePage } = usePages();

  const [isInChat, setIsInChat] = useState(false);
  const [chatContent, setChatContent] = useState(undefined);

  const handleChat = async (input) => {

    if (!isInChat) {
      const chat = await createNewChat(input);
      updatePages();
      if (chat !== null) {
        changePage(chat);
        setChatContent(chat);
        setIsInChat(true);
      }

    } else {
      try {
        const msg = await getInputAnswer(input, chatPageContent.id);

        // Given a new msg, update the chat log for the page, initially, creates a shallow copy of the 
        // previous state and than update the log in state.chat
        setChatContent(prevChat => ({
          ...prevChat,
          chat: [...prevChat.chat, ...msg]
        }));

      } catch (error) {
        console.error("Error getting input answer:", error);
      }
    }

  };

  useEffect(() => {
    if (chatContent?.id !== chatPageContent?.id) {
      setChatContent(chatPageContent);
      setIsInChat(true);
    }

    if (!chatPageContent)
      setIsInChat(false);

  }, [chatPageContent])


  return <div className='central'>

    <h2 className='top-title'>Chat <span className='UFOP-title'>UFOP</span></h2>

    {!isInChat && !chatContent ?
      (<h1> Seu ajudante pessoal de resoluções da <br /> <span className='UFOP-Name'>UFOP</span></h1>) :
      (<Chat content={chatContent} />)
    }

    <SearchBar inputCB={handleChat} />

  </div>

}

function App() {
  return (
    <PagesProvider>
      <div className='outter-main'>
        <img src={Itacolomi} className='mountains-BG' />
        <div className='main'>
          <SideBar side='left' />
          <CentralArea />
          <SideBar side='right' />
        </div>
      </div>
    </PagesProvider>
  )
}

export default App
