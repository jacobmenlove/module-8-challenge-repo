// import Driveable interface
import Driveable from '../interfaces/Driveable.js';
import inquirer from 'inquirer';

export abstract class Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number
  ) {
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
  }

  // Abstract methods that must be implemented by subclasses
  abstract printDetails(): void;
  abstract start(): void;
  abstract accelerate(amount: number): void;
  abstract decelerate(amount: number): void;
  abstract stop(): void;
  abstract turn(direction: 'left' | 'right'): void;
  abstract reverse(): void;
}
