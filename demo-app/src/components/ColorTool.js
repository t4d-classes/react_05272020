import React from 'react';

export const ColorTool = (tommy) => {

  // props.colors.push({
  //   id: 6, name: 'purple',
  // });

  // props.newProp = 'test';
  // props.colors = [];
  // delete props.colors;

  // const colors = props.colors;
  // colors.push({ })
  // console.log(Object.isFrozen(props));

  return <>
    <header>
      <h1>Color Tool</h1>
    </header>
    <ul>
      {tommy.colors.map( (c) => <li key={c.id}>{c.name}</li>)}
    </ul>
  </>;

};
