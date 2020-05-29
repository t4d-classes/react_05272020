import React from 'react';
import ReactDOM from 'react-dom';

import { CarStoreProvider } from './stores/carStore';

import { ColorTool } from './components/ColorTool';
import { CarToolContainer } from './containers/CarToolContainer';

const colorList = [
  { id: 1, name: 'orange' },
  { id: 2, name: 'green' },
  { id: 3, name: 'blue' },
  { id: 4, name: 'yellow' },
];

ReactDOM.render(
  <>
    <ColorTool colors={colorList} />
    <CarStoreProvider>
      <CarToolContainer />
    </CarStoreProvider>
  </>,
  document.querySelector('#root'),
);
