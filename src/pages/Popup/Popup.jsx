import React from 'react';
import { useState, useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
// import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setloading] = useState(true);
  console.log(localStorage.getItem('link'));
  let [link, setLink] = useState(0);

  let [extData, setExtData] = useState({});
  useState;
  useEffect(async () => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      // console.log('tabs', tabs);
      let newURL = tabs[0].url.match('((.*?)://(.*?)(/))');
      //just for an ultra rare edge case which might not exist
      if (newURL == null) newURL = '';
      else newURL = newURL[0];
      // console.log('newURL', newURL);
      // setUrl(tabs[0].url);
      setUrl(newURL);
      // console.log('URl:', newURL);
      setTitle(tabs[0].title + '');
      if (localStorage.getItem('link') == null) {
        localStorage.setItem('link', 0);
      } else {
        link = parseInt(localStorage.getItem('link'));
      }
      setLink(link + 1);
      // // console.log(link + 5);
      localStorage.setItem('link', link + 1);

      chrome.storage.local.get(['data'], function (result) {
        // console.log('Value currently is ' + JSON.stringify(result['data']));
        console.log('1111111111111111');
        extData = result['data'];
        if (extData[newURL] == undefined) {
          extData[newURL] = { title: 1 };
          // extData[newURL][title] = 1;
          // console.log('hiiii', extData[newURL][title]);
        } else if (extData[newURL][title] == undefined) {
          extData[newURL][title] = 1;
        } else {
          extData[newURL][title] = extData[newURL][title] + 1;
        }
        console.log('ext data log', extData);
        chrome.storage.local.set({ data: extData }, function () {
          // console.log('Value is set to ' + JSON.stringify(extData));
        });
        setExtData(extData);
        return result.data;
      });

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
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/pages/Popup/Popup.jsx</code> and save to reload.
        </p>
        <p>{url}</p>
        <p>{title}</p>
        <p>{link}</p>
        aa
        <p>{JSON.stringify(extData)}</p>
        aa
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
