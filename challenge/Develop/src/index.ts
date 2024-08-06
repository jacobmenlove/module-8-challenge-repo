import Truck from "./classes/Truck.js";
import { Car } from "./classes/Car"; 
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import { Cli } from "./classes/Cli";
import inquirer from 'inquirer';

const cli = new Cli();

const car1 = new Car(
    '1HGBH41JXMN109186', 'red', 'Toyota', 'Corolla', 2022, 1500, 180, 4
);

cli.addVehicle(car1);

const truck1 = new Truck(
    '2FTRX18L41CA12345', 'blue', 'Ford', 'F-150', 2021, 3000, 160, [new Wheel(), new Wheel(), new Wheel(), new Wheel()], 10000
);

cli.addVehicle(Truck1);

const motorbike1 = new Motorbike(
    '3J6DA01J8MS123456', 'black', 'Harley Davidson', 'Sportster', 2021, 300, 200, [new Wheel(), new Wheel()]
);

cli.addVehicle(motorbike1);

cli.selectVehicle();