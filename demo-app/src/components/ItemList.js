import React from 'react';
import PropTypes from 'prop-types';

export const ItemList = ({ items }) => {

  // const items = props.items;
  // const { items } = props;

  return (
    <ul>
      {items.map( (item) =>
        <li key={item.id}>{item.name}</li>)}
    </ul>
  );

};

ItemList.defaultProps = {
  items: [],
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
};