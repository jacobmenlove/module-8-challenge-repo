import inquirer from 'inquirer';

interface AbleToTow {
    tow(vehicle: Car | Motorbike): void;
  }
  
  // Export the AbleToTow interface as the default export
  export default AbleToTow;
  