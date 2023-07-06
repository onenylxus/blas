// Import
import Simple from '../structs/simple';

// Define type
type TInteger = InstanceType<typeof CInteger>;

// Integer class
class CInteger extends Simple {
  // Constructor
  public constructor(value: number = 0) {
    super(value);
  }

  // Set value to store
  public set(value: number): void {
    this.store = Math.trunc(value);
  }
}

// Export
export { CInteger as Integer, TInteger as I };
