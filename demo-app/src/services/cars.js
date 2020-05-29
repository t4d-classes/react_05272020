export class Cars {

  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  // all() {
  //   return fetch(this._baseUrl)
  //     .then(res => res.json())
  //     .catch(err => );
  // }

  async all() {
    const res = await fetch(this._baseUrl);
    return await res.json();
  }

  async append(car) {
    
    const res = await fetch(this._baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    });

    return await res.json();
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