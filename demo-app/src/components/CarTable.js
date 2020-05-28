import React from 'react';

import { CarViewRow } from './CarViewRow';

export const CarTable = ({ cars, onDeleteCar }) => {

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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(c =>
          <CarViewRow key={c.id} car={c} onDeleteCar={onDeleteCar} />)}
      </tbody>
    </table>
  );
};