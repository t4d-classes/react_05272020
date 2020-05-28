import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { ItemList } from './ItemList';
import { ColorForm } from './ColorForm';


export const ColorTool = (props) => {

  const [ colors, setColors ] = useState(props.colors.concat());

  const addColor = (color) => {
    setColors(colors.concat({
      name: color.colorName,
      id: Math.max(...colors.map(c => c.id), 0) + 1,
    }));
  };

  return <>
    <ToolHeader headerText="Color Tool" />
    <ItemList items={colors} />
    <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
  </>;

};
