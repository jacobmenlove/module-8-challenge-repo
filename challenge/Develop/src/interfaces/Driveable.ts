
import inquirer from 'inquirer';

interface Driveable {

  started: boolean;
  currentSpeed: number;
 
  start(): void;
  accelerate(change: number): void;
  decelerate(change: number): void;
  stop(): void;
  turn(direction: string): void;
  reverse(): void;
}


export default Driveable;
