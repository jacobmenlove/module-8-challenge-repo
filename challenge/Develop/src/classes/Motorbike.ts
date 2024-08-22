import Vehicle  from './Vehicle.js';
import Wheel from './Wheel.js';
import inquirer from 'inquirer';

class Motorbike extends Vehicle {
  wheels: Wheel[]; // Declare the wheels property

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] // Parameter for wheels
  ) {
    super(vin, color, make, model, year, weight, topSpeed);
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    // Initialize wheels property
    this.wheels = wheels.length !== 2 ? [new Wheel(), new Wheel()] : wheels;
  }

  wheelie(): void {
    console.log(`${this.make} ${this.model} is performing a wheelie!`);
  }

  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    this.wheels.forEach((wheel: Wheel, index: number) => { // Ensure 'wheel' and 'index' are typed
      console.log(`Wheel ${index + 1}: ${wheel.toString()}`);
    });
  }
  start() { console.log('Motorbike started.'); }
  accelerate(amount: number) { console.log(`Motorbike accelerated by ${amount} km/h.`); }
  decelerate(amount: number) { console.log(`Motorbike decelerated by ${amount} km/h.`); }
  stop() { console.log('Motorbike stopped.'); }
  turn(direction: string) { console.log(`Motorbike turned ${direction}.`); }
  reverse() { console.log('Motorbike is reversing.'); }
  
}

export default Motorbike;
