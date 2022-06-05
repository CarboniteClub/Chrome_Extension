import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

console.log(localStorage.getItem('link'));
let link;
if (localStorage.getItem('link') == null) {
  localStorage.setItem('link', 0);
} else {
  link = parseInt(localStorage.getItem('link'));
  console.log('parsint', link);
  localStorage.setItem('link', link + 1);
}
console.log(link);
// if (parseInt(localStorage.getItem('link')) != 'NaN')
//   localStorage.setItem('link', link + 1);
// else {
//   localStorage.setItem('link', 0);
// }
// console.log('link', link);
