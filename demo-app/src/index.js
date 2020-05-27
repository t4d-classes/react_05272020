import React from 'react';
import ReactDOM from 'react-dom';

import { HelloWorld } from './components/HelloWorld';

ReactDOM.render(
  // React.createElement(HelloWorld),
  <HelloWorld />,
  document.querySelector('#root'),
);



// function HelloWorld1() {
//   return React.createElement('h1', null, 'Hello World!');
// }

// const HelloWorld2 = function() {
//   return React.createElement('h1', null, 'Hello World!');
// };

