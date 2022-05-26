import React from 'react';
import { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
// import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  const [url, setUrl] = useState('');
  const [loading, setloading] = useState(true);
  console.log(localStorage.getItem('link'));
  let [link, setLink] = useState(0);
  useEffect(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      setUrl(tabs[0].url);
      if (localStorage.getItem('link') == null) {
        localStorage.setItem('link', 0);
      } else {
        link = parseInt(localStorage.getItem('link'));
      }
      setLink(link + 1);
      // console.log(link + 5);
      localStorage.setItem('link', link + 1);
      setloading(false);
    });
  }, []);

  // let link;
  // if (link == undefined) {
  //   link = 0;
  // } else {
  //   link++;
  // }

  // chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  //   setUrl(tabs[0].url);
  // });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (link == undefined) {
    return <div>Link...</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <p>{url}</p>
        <p>{link}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
};

export default Popup;
