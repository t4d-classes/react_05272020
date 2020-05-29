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
  const [ errorMessage, setErrorMessage ] = useState('');

  const carStoreContextValue = {
    cars,
    editCarId,
    errorMessage,
    async onRefreshCars() {
      try {
        const cars = await carsSvc.all()
        setCars(cars);
      } catch (err) {
        setErrorMessage(err.message);
      }
    },
    // async onAddCar(car) {
    //   await carsSvc.append(car);
    //   const cars = await carsSvc.all()
    //   setCars(cars);
    //   setEditCarId(-1);
    // },
    onAddCar(car) {
      return carsSvc
        .append(car)
        .then(() => carsSvc.all())
        .then(cars => {
          setCars(cars);
          setEditCarId(-1);
        });
    },
    async onSaveCar(car) {
      await carsSvc.replace(car);
      const cars = await carsSvc.all()
      setCars(cars);
      setEditCarId(-1);
    },
    async onDeleteCar(carId) {
      await carsSvc.remove(carId);
      const cars = await carsSvc.all()
      setCars(cars);
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