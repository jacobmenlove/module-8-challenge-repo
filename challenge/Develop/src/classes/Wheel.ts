// Define the Wheel class
class Wheel {
  private diameter: number;
  private tireBrand: string;

  constructor(diameter: number = 16, tireBrand: string = 'Generic') {
    this.diameter = diameter;
    this.tireBrand = tireBrand;
  }

  get getDiameter(): number {
    return this.diameter;
  }

  get getTireBrand(): string {
    return this.tireBrand;
  }
}

// Export the Wheel class as the default export
export default Wheel;

