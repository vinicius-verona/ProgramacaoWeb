import React, { createContext, useContext, useEffect, useState } from 'react';

const PagesContext = createContext();

export const usePages = () => {
  const context = useContext(PagesContext);
  if (!context) {
    throw new Error('usePages must be used within a PagesProvider');
  }
  return context;
};

function sortPages(a, b) {
  const _a = new Date(a.creation_date);
  const _b = new Date(b.creation_date);

  return (_a - _b) * (-1);
}

export const PagesProvider = ({ children }) => {
  const [chatPageContent, setChatPageContent] = useState(undefined);
  const [updated, setUpdatePages] = useState(false);
  const [toggleSideBar, setToggleSideBar] = useState(true);
  const [pages, setPages] = useState(Object.keys(sessionStorage).map(key => {
    return {
      id: key,
      creation_date: JSON.parse(sessionStorage.getItem(key)).creation_date
    }
  }).sort(sortPages));


  useEffect(() => {
    setPages(Object.keys(sessionStorage).map(key => {
      if (key !== 'UpdateFlag')
        return {
          id: key,
          creation_date: JSON.parse(sessionStorage.getItem(key)).creation_date
        }
    }).sort(sortPages));
    setUpdatePages(false);

  }, [updated]);


  const updatePages = () => {
    setUpdatePages(true);
  }

  const changePage = (chat) => {
    setChatPageContent(chat);
  }

  const toggleMenu = () => {
    setToggleSideBar(!toggleSideBar);
  }

  return (
    <PagesContext.Provider value={{
      pages: pages, chatPageContent: chatPageContent, toggleSideBar: toggleSideBar,
      updatePages: updatePages, changePage: changePage, toggleMenu: toggleMenu
    }}>
      {children}
    </PagesContext.Provider>
  );
};