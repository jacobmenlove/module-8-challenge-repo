import  Vehicle from './Vehicle.js'; 
import  Car  from './Car.js'; 
import  Motorbike  from './Motorbike.js';  
import  Wheel  from './Wheel.js'; 
import AbleToTow  from '../interfaces/AbleToTow.js'; 


export class Truck extends Vehicle implements AbleToTow {

  towingCapacity: number;
  wheels: Wheel[];

  
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super(vin, color, make, model, year, weight, topSpeed);
    
    this.towingCapacity = towingCapacity;

    
    if (wheels.length !== 4) {
      this.wheels = Array.from({ length: 4 }, () => new Wheel()); 
    } else {
      this.wheels = wheels;
    }
  }

  
  tow(vehicle: Truck | Motorbike | Car): void {
    
    if (vehicle instanceof Vehicle) {
      const { make, model, weight } = vehicle;

      
      if (weight <= this.towingCapacity) {
        console.log(`The ${make} ${model} is being towed.`);
      } else {
        console.log(`The ${make} ${model} is too heavy to be towed.`);
      }
    } else {
      console.log('The vehicle cannot be towed.');
    }
  }

  
  override printDetails(): void {
    super.printDetails();
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels.length}`); 
  }
  start() { console.log('Truck started.'); }
    accelerate(amount: number) { console.log(`Truck accelerated by ${amount} km/h.`); }
    decelerate(amount: number) { console.log(`Truck decelerated by ${amount} km/h.`); }
    stop() { console.log('Truck stopped.'); }
    turn(direction: string) { console.log(`Truck turned ${direction}.`); }
    reverse() { console.log('Truck is reversing.'); }
}


export default Truck;
