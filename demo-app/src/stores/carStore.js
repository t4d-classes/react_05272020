import React, { createContext, useState } from 'react';

import { Cars } from '../services/cars';

const carsSvc = new Cars();

const CarStoreContext = createContext({
  cars: [],
  editCarId: -1,
});

const CarStoreProvider = ({ children }) => {

  const [ cars, setCars ] = useState(carsSvc.all());
  const [ editCarId, setEditCarId ] = useState(-1);

  const carStoreContextValue = {
    cars,
    editCarId,
    onAddCar(car) {
      setCars(carsSvc.append(car).all());
    },
    onSaveCar(car) {
      setCars(carsSvc.replace(car).all());
    },
    onDeleteCar(carId) {
      setCars(carsSvc.remove(carId).all());
    },
    onEditCar(carId) {
      setEditCarId(carId);
    },
    onCancelCar() {
      setEditCarId(-1);
    },
  };

  return (
    <CarStoreContext.Provider value={carStoreContextValue}>
      {children}
    </CarStoreContext.Provider>
  );

};