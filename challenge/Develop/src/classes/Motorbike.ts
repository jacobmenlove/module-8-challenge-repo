
import { Vehicle } from './Vehicle'; 

import Wheel from './Wheel.js';
import inquirer from 'inquirer';


class Motorbike extends Vehicle {
  override vin: string;
override color: string;
override make: string;
override model: string;
override year: number;
override weight: number;
override topSpeed: number;
 
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super(vin, color, make, model, year, weight, topSpeed);
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
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
    this.wheels.forEach((wheel, index) => {
      console.log(`Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire`);
    });
  }
}

export default Motorbike;

