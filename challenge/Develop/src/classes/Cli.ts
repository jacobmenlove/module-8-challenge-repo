import Truck from './Truck.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js'; 
import inquirer from 'inquirer';

export class Cli {
    private vehicles: (Truck | Car | Motorbike)[] = [];
    private selectedVehicleVin: string | null = null;
  
    public addVehicle(vehicle: Truck | Car | Motorbike) {
      this.vehicles.push(vehicle);
    }
  
    public async selectVehicle() {
      const vehicleChoices = this.vehicles.map(vehicle => ({
        name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
        value: vehicle.vin,
      }));
  
      const answers = await inquirer.prompt([
        {
          type: 'list',
          name: 'selectedVehicle',
          message: 'Select a vehicle:',
          choices: vehicleChoices,
        }
      ]);
  
      this.selectedVehicleVin = answers.selectedVehicle;
      this.performActions();
    }
  
    private async performActions() {
      if (!this.selectedVehicleVin) return;
  
      const selectedVehicle = this.vehicles.find(vehicle => vehicle.vin === this.selectedVehicleVin);
  
      if (!selectedVehicle) return;
  
      const actions = [
        'Print Details',
        'Start',
        'Accelerate',
        'Decelerate',
        'Stop',
        'Turn Right',
        'Turn Left',
        'Reverse',
      ];
  
      if (selectedVehicle instanceof Motorbike) {
        actions.push('Wheelie');
      }
  
      const answers = await inquirer.prompt([
        {
          type: 'list',
          name: 'action',
          message: 'What would you like to do?',
          choices: actions,
        }
      ]);
  
      switch (answers.action) {
        case 'Print Details':
          selectedVehicle.printDetails();
          break;
        case 'Start':
          selectedVehicle.start();
          break;
        case 'Accelerate':
          selectedVehicle.accelerate(5);
          break;
        case 'Decelerate':
          selectedVehicle.decelerate(5);
          break;
        case 'Stop':
          selectedVehicle.stop();
          break;
        case 'Turn Right':
          selectedVehicle.turn('right');
          break;
        case 'Turn Left':
          selectedVehicle.turn('left');
          break;
        case 'Reverse':
          selectedVehicle.reverse();
          break;
        case 'Wheelie':
          (selectedVehicle as Motorbike).wheelie();
          break;
      }
  
      this.selectVehicle();
    }
  }

  export default Cli; 