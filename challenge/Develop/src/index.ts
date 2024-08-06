// Import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// Create an array of vehicles
const vehicles = [];

// Default vehicles
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  []
);

// Uncomment and add a truck and motorbike when their classes are implemented
// const truck1 = new Truck(Cli.generateVin(),"red", "Ford", "F-150", 2021, 5000, 120, [], 10000);
// const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
// const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels);

// Push vehicles to array
vehicles.push(car1);
// vehicles.push(truck1);
// vehicles.push(motorbike1);

// Create a new instance of the Cli class
co
