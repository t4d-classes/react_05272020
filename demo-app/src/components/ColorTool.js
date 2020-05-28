import React from 'react';

import { ToolHeader } from './ToolHeader';
import { ItemList } from './ItemList';

export const ColorTool = (props) => {

  return <>
    <ToolHeader headerText="Color Tool" />
    <ItemList items={props.colors} />
  </>;

};
