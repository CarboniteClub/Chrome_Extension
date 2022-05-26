import React from 'react';
import { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
// import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
let link = {
  tst: 0,
};

const async1SecTimer = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  link['tst']++;
  console.log(link['tst']);
};

(async () => {
  try {
    while (1) {
      await async1SecTimer();
    }
  } catch (e) {
    // Deal with the fact the chain failed
  }
  // `text` is not available here
})();

const Popup = () => {
  const [url, setUrl] = useState('');
  const [loading, setloading] = useState(true);
  useEffect(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      setUrl(tabs[0].url);
      setloading(false);
    });
  }, []);

  // chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  //   setUrl(tabs[0].url);
  // });
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <p>{url}</p>
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
