import React from 'react';
import { render } from 'react-dom';

import Newtab from './Newtab';
import './index.css';

render(<Newtab />, window.document.querySelector('#app-container'));

if (module.hot) module.hot.accept();

chrome.action.onClicked.addListener(function (tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  chrome.scripting.executeScript({
    code: 'document.body.style.backgroundColor="red"',
  });
});
