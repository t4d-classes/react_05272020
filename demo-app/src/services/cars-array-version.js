export class Cars {

  constructor() {
    this._cars = [
      { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'white', price: 45000 },
      { id: 2, make: 'Tesla', model: 'S', year: 2020, color: 'red', price: 130000 },
    ];
  }

  all() {
    return this._cars.concat();
  }

  append(car) {
    this._cars = this._cars.concat({
      ...car,
      id: Math.max(...this._cars.map(c => c.id), 0) + 1,
    });
    return this;
  }

  replace(car) {
    const carIndex = this._cars.findIndex(c => c.id === car.id);
    const newCars = this._cars.concat();
    newCars[carIndex] = car;
    this._cars = newCars;
    return this;
  }

  remove(carId) {
    this._cars = this._cars.filter(c => c.id !== carId);
    return this;
  }

}