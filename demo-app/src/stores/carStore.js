import React, { createContext, useState, useContext } from 'react';

import { Cars } from '../services/cars';

const carsSvc = new Cars('http://localhost:3060/cars');

const CarStoreContext = createContext({
  cars: [],
  editCarId: -1,
});

export const CarStoreProvider = ({ children }) => {

  const [ cars, setCars ] = useState([] /* carsSvc.all() */);
  const [ editCarId, setEditCarId ] = useState(-1);

  const carStoreContextValue = {
    cars,
    editCarId,
    onRefreshCars() {
      return carsSvc.all()
        .then(cars => setCars(cars));
    },
    onAddCar(car) {
      setCars(carsSvc.append(car).all());
      setEditCarId(-1);
    },
    onSaveCar(car) {
      setCars(carsSvc.replace(car).all());
      setEditCarId(-1);
    },
    onDeleteCar(carId) {
      setCars(carsSvc.remove(carId).all());
      setEditCarId(-1);
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

export const createCarToolContainer = (PresentationalComponent) => {

  return <CarStoreContext.Consumer>
    {value => <PresentationalComponent {...value} />}
  </CarStoreContext.Consumer>;

};


export const useCarStore = () => {
  return useContext(CarStoreContext);
};