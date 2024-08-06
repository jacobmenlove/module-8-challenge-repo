import { Car } from '../classes/Car'; 
import Motorbike from "../classes/Motorbike"

export interface AbleToTow {
  tow(vehicle: Car | Motorbike): void;
}
 
  export default AbleToTow;
  