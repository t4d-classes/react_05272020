import React, { useState } from 'react';

export const CarEditRow = ({ car, onSaveCar, onCancelCar }) => {

  const [ carForm, setCarForm ] = useState({ ...car });

  const change = (e) => {
    setCarForm({
      ...carForm,
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value) : e.target.value,
    });
  };

  const saveCar = () => {
    onSaveCar({ ...carForm });
  };

  return (
    <tr>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <td>
        <button type="button" onClick={saveCar}>Save</button>
        <button type="button" onClick={onCancelCar}>Cancel</button>
      </td>
    </tr>
  );

};