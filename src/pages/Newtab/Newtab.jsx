import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Newtab.css';
import './Newtab.scss';
import { useState, useEffect } from 'react';

const Newtab = () => {
  // const [link, setLink] = useState(parseInt(localStorage.getItem('link')));
  const [data, setData] = useState({});
  useEffect(() => {
    chrome.storage.local.get(['data'], function (result) {
      console.log('Value currently is ' + JSON.stringify(result['data']));
      setData(result.key);
      return result.key;
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Newtab/Newtab.js</code> and save to reload.
        </p>
        {/* <div>{link}</div> */}
        {JSON.stringify(data)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
        <h6>The color of this paragraph is defined using SASS.</h6>
      </header>
    </div>
  );
};

export default Newtab;
