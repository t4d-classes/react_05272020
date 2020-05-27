import React from 'react';

export const ColorTool = () => {

  const colors = [
    { id: 1, name: 'orange' },
    { id: 2, name: 'green' },
    { id: 3, name: 'blue' },
    { id: 4, name: 'yellow' },
  ];

  // const colorListItems = [];

  // for (let x=0; x<colors.length; x++) {
  //   colorListItems.push(<li>{colors[x]}</li>);
  // }

  return <>
    <header>
      <h1>Color Tool</h1>
    </header>
    <ul>
      {colors.map( (c) => <li key={c.id}>{c.name}</li>)}
    </ul>
  </>;

};
