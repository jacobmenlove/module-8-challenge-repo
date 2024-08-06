import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";
import inquirer from 'inquirer';

const vehicles = [];

const cli = new Cli();

const car1 = new Car(
  '1HGBH41JXMN109186', 
  'red',                
  'Toyota',           
  'Corolla',           
  2022,               
  1500,               
  180,                  
  4                    
);

cli.addVehicle(car1);

const truck1 = new Truck(
  '2FTRX18L41CA12345', 
  'blue',              
  'Ford',             
  'F-150',             
  2021,                
  3000,                
  160,                 
  10000                
);

cli.addVehicle(truck1);

const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike1 = new Motorbike(
  '3J6DA01J8MS123456', 
  'black',             
  'Harley Davidson',   
  'Sportster',         
  2021,              
  300,               
  200,                
  2                   
);

cli.addVehicle(motorbike1);


cli.selectVehicle();