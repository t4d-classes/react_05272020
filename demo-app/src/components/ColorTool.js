import React from 'react';

export const ColorTool = (props) => {



  // const colorListItems = [];

  // for (let x=0; x<colors.length; x++) {
  //   colorListItems.push(<li>{colors[x]}</li>);
  // }

  return <>
    <header>
      <h1>Color Tool</h1>
    </header>
    <ul>
      {props.colors.map( (c) => <li key={c.id}>{c.name}</li>)}
    </ul>
  </>;

};
