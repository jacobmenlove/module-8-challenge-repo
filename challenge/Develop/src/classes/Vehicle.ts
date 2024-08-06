export class Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;

  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number) {
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.topSpeed = topSpeed;
  }

  printDetails() {
      console.log(`VIN: ${this.vin}`);
      console.log(`Color: ${this.color}`);
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Weight: ${this.weight}`);
      console.log(`Top Speed: ${this.topSpeed}`);
  }
}

export class Car extends Vehicle {
  numDoors: number;

  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, numDoors: number) {
      super(vin, color, make, model, year, weight, topSpeed);
      this.numDoors = numDoors;
  }

  override printDetails() {
      super.printDetails();
      console.log(`Number of Doors: ${this.numDoors}`);
  }

  start() { console.log('Car started.'); }
  accelerate(amount: number) { console.log(`Car accelerated by ${amount} km/h.`); }
  decelerate(amount: number) { console.log(`Car decelerated by ${amount} km/h.`); }
  stop() { console.log('Car stopped.'); }
  turn(direction: string) { console.log(`Car turned ${direction}.`); }
  reverse() { console.log('Car is reversing.'); }
}

export class Truck extends Vehicle {
  towingCapacity: number;

  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, towingCapacity: number) {
      super(vin, color, make, model, year, weight, topSpeed);
      this.towingCapacity = towingCapacity;
  }

  override printDetails() {
      super.printDetails();
      console.log(`Towing Capacity: ${this.towingCapacity}`);
  }

  start() { console.log('Truck started.'); }
  accelerate(amount: number) { console.log(`Truck accelerated by ${amount} km/h.`); }
  decelerate(amount: number) { console.log(`Truck decelerated by ${amount} km/h.`); }
  stop() { console.log('Truck stopped.'); }
  turn(direction: string) { console.log(`Truck turned ${direction}.`); }
  reverse() { console.log('Truck is reversing.'); }
}

export class Motorbike extends Vehicle {
  numWheels: number;

  constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, numWheels: number) {
      super(vin, color, make, model, year, weight, topSpeed);
      this.numWheels = numWheels;
  }

  override printDetails() {
      super.printDetails();
      console.log(`Number of Wheels: ${this.numWheels}`);
  }

  start() { console.log('Motorbike started.'); }
  accelerate(amount: number) { console.log(`Motorbike accelerated by ${amount} km/h.`); }
  decelerate(amount: number) { console.log(`Motorbike decelerated by ${amount} km/h.`); }
  stop() { console.log('Motorbike stopped.'); }
  turn(direction: string) { console.log(`Motorbike turned ${direction}.`); }
  reverse() { console.log('Motorbike is reversing.'); }
  wheelie() { console.log('Motorbike is doing a wheelie!'); }
}
