import { useEffect, useState, useRef } from 'react'
import './style.css'
import RobotIcon from '../../assets/robot-icon.jsx';
import UserIcon from '../../assets/user-icon.jsx';


/**
 * @returns a 128-bit long string with alpha-numeric random values 
 */
function generateUniqueRandomString() {
  const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let randomString = '';

  for (let i = 0; i < 32; i++) {
    const randomIndex = Math.floor(Math.random() * 62);
    randomString += characters[randomIndex];
  }

  return randomString;
}

export async function getInputAnswer(input, chatid) {

  const response = {
    role: "ufop",
    text: (await (await fetch('/chat-api/', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ input: input })
    })).json()).res
  };

  let chat = JSON.parse(sessionStorage.getItem(chatid));
  chat.chat.push({ role: "user", text: input });
  chat.chat.push(response);

  sessionStorage.removeItem(chatid);
  sessionStorage.setItem(chatid, JSON.stringify(chat));
  // sessionStorage.setItem('UpdateFlag', 'updated');

  return [{ role: "user", text: input }, response];

}

export async function createNewChat(input) {


  let id = generateUniqueRandomString();

  while (sessionStorage.getItem(id) !== null)
    id = generateUniqueRandomString();

  // Build a chatlog
  let chatlog = [{
    role: "user",
    text: input
  }, {
    role: "ufop",
    text: (await (await fetch('/chat-api/', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ input: input })
    })).json()).res
  }];

  let chat = {
    id: id + '-chat-ufop',
    creation_date: new Date(),
    chat: chatlog
  };

  sessionStorage.setItem(id + '-chat-ufop', JSON.stringify(chat));
  // sessionStorage.setItem('UpdateFlag', 'updated');
  return chat;

}

function Message({ role, content }) {

  return (
    <section className={`message-container-${role}`}>
      {role === 'ufop' ? <RobotIcon svgClassName={`icon-${role}`} /> : <div className='whitespace' />}
      <div className={`role-${role}`}>{content}</div>
      {role === 'user' ? <UserIcon svgClassName={`icon-${role}`} /> : <div className='whitespace' />}
    </section>
  );

}

export default function Chat({ content }) {
  return (
    <div className='chat'>

      {content.chat.map((msg, idx) => {
        return <Message role={msg.role} content={msg.text} key={"msg-" + idx} />
      })}

    </div>
  );
}