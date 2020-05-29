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
      <td><input type="text" name="make" value={car.make} onChange={change} /></td>
      <td><input type="text" name="model" value={car.model} onChange={change} /></td>
      <td><input type="number" name="year" value={car.year} onChange={change} /></td>
      <td><input type="text" name="color" value={car.color} onChange={change} /></td>
      <td><input type="number" name="price" value={car.price} onChange={change} /></td>
      <td>
        <button type="button" onClick={saveCar}>Save</button>
        <button type="button" onClick={onCancelCar}>Cancel</button>
      </td>
    </tr>
  );

};