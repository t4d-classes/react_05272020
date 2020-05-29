import React, { useEffect } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({
  cars, editCarId,
  onAddCar, onSaveCar,
  onDeleteCar, onEditCar,
  onCancelCar, onRefreshCars,
}) => {

  useEffect(() => {

    onRefreshCars();

  }, []);

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={onEditCar} onDeleteCar={onDeleteCar}
        onSaveCar={onSaveCar} onCancelCar={onCancelCar} />
      <CarForm onSubmitCar={onAddCar} buttonText="Add Car" />
    </>
  );

};
