export class Cars {

  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  all() {
    return fetch(this._baseUrl)
      .then(res => res.json());
  }

  append(car) {
    // this._cars = this._cars.concat({
    //   ...car,
    //   id: Math.max(...this._cars.map(c => c.id), 0) + 1,
    // });
    return this;
  }

  replace(car) {
    // const carIndex = this._cars.findIndex(c => c.id === car.id);
    // const newCars = this._cars.concat();
    // newCars[carIndex] = car;
    // this._cars = newCars;
    return this;
  }

  remove(carId) {
    // this._cars = this._cars.filter(c => c.id !== carId);
    return this;
  }

}