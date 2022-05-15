import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Newtab.css';
import './Newtab.scss';

const Newtab = () => {
  // const parseDomainFromUrl = function (e) {
  //   var t, n;
  //   return (n = document.createElement('a')), (n.href = e), (t = n.hostname);
  // };
  // async function getCurrentTab() {
  //   let queryOptions = { active: true, currentWindow: true };
  //   let [tab] = await chrome.tabs.query(queryOptions);
  //   // console.log(parseDomainFromUrl(tab.url), 'aaaa');
  //   return tab;
  // }
  // getCurrentTab();
  // async function getCurrentTab() {
  //   let queryOptions = { active: true, currentWindow: true };
  //   let [tab] = await chrome.tabs.query(queryOptions);
  //   console.log(tab);
  // }
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    console.log(tabs[0].url);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/pages/Newtab/Newtab.js</code> and save to reload.
        </p>
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
