import React from 'react';

export const CarTable = (props) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.cars.map(c => <tr key={c.id}>
          <td>{c.id}</td>
          <td>{c.make}</td>
          <td>{c.model}</td>
          <td>{c.year}</td>
          <td>{c.color}</td>
          <td>{c.price}</td>
        </tr>)}
      </tbody>
    </table>
  );
};