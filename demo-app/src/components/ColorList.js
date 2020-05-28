import React from 'react';

export const ColorList = (props) => {

  return (
    <ul>
      {props.colors.map( (c) =>
        <li key={c.id}>{c.name}</li>)}
    </ul>
  );

};