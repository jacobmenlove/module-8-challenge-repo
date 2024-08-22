import Vehicle from './Vehicle.js'; 
import Wheel from './Wheel.js';
import inquirer from 'inquirer';


export class Car extends Vehicle {
    numDoors: number;

    constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, numDoors: number) {
        super(vin, color, make, model, year, weight, topSpeed);
        this.numDoors = numDoors;
    }

    override printDetails(): void {
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

export default Car;