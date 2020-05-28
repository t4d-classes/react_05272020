import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { ItemList } from './ItemList';

export const ColorTool = (props) => {

  const [ colors, setColors ] = useState(props.colors.concat());

  const [
    colorForm, // state data
    setColorForm, // update function - update the state, and trigger the re-render
  ] = useState({
    colorName: '',
  } /* initial value of the state, it is only used on the first render */);

  const change = (e) => {

    setColorForm({
      ...colorForm, // copy all of the properties into the new object
      [ e.target.name ]: e.target.value,
    });

  };

  const addColor = () => {

    setColors(colors.concat({
      name: colorForm.colorName,
      id: Math.max(...colors.map(c => c.id), 0) + 1,
    }));

    setColorForm({
      colorName: '',
    });

  };

  return <>
    <ToolHeader headerText="Color Tool" />
    <ItemList items={colors} />

    <form>
      <div>
        <label htmlFor="color-name-input">Color Name:</label>
        <input type="text" id="color-name-input" name="colorName" value={colorForm.colorName} onChange={change} />
      </div>
      <button type="button" onClick={addColor}>Add Color</button>
    </form>

  </>;

};
