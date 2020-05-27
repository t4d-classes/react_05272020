import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  { id: 1, name: 'orange' },
  { id: 2, name: 'green' },
  { id: 3, name: 'blue' },
  { id: 4, name: 'yellow' },
];

ReactDOM.render(
  <>
    <ColorTool colors={colorList} />
    <ColorTool colors={colorList} />
    <CarTool />
  </>,
  document.querySelector('#root'),
);
