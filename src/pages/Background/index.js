console.log('This is the background page.');
console.log('Put the background scripts here.');

// let a = await getCurrentTab();
// console.log(res);

// async function getCurrentTab() {
//   let queryOptions = { active: true, currentWindow: true };
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab;
// }

// chrome.runtime.onStartup.addListener(async () => {
//   console.log(await getCurrentTab());
// });

// // chrome.runtime.onStartup

// parseDomainFromUrl(e.url)

// const parseDomainFromUrl = function (e) {
//   var t, n;
//   return (n = document.createElement('a')), (n.href = e), (t = n.hostname);
// };
// async function getCurrentTab() {
//   let queryOptions = { active: true, currentWindow: true };
//   let [tab] = await chrome.tabs.query(queryOptions);
//   console.log(parseDomainFromUrl(tab.url));
//   return tab;
// }
// // getCurrentTab();

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  console.log(tabs[0].url);
});
