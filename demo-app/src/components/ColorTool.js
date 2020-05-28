import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { ItemList } from './ItemList';

export const ColorTool = (props) => {

  // const colorFormStateArray = useState({
  //   colorName: '',
  //   colorHexcode: '',
  // });

  // // const colorFormStateData = colorFormStateArray[0];
  // // const colorFormStateUpdateFn = colorFormStateArray[1];


  // const [ colorFormStateData, colorFormStateUpdateFn ] = colorFormStateArray;

  const [
    colorForm, // state data
    setColorForm, // update function - update the state, and trigger the re-render
  ] = useState({
    colorName: '',
    colorHexcode: '',
  } /* initial value of the state, it is only used on the first render */);

  const change = (e) => {

    setColorForm({
      ...colorForm, // copy all of the properties into the new object
      // code which will update the one properties (field) I am typing into
      
      // colorName: e.target.value,
      
      // computed property, the expression within the square braces is evaluation,
      // and the result is the name of the property
      // which will be updated
      [ e.target.name ]: e.target.value,
    });

  };

  console.log(colorForm);

  return <>
    <ToolHeader headerText="Color Tool" />
    <ItemList items={props.colors} />

    <form>
      <div>
        <label htmlFor="color-name-input">Color Name:</label>
        <input type="text" id="color-name-input" name="colorName" value={colorForm.colorName} onChange={change} />
      </div>
    </form>

  </>;

};
