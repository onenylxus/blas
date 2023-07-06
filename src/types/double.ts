// Import
import Simple from '../structs/simple';

// Define type
type TDouble = InstanceType<typeof CDouble>;

// Double class
class CDouble extends Simple {
  // Constructor
  public constructor(value: number = 0) {
    super(value);
  }

  // Set value to store
  public set(value: number): void {
    this.store = value;
  }
}

// Export
export { CDouble as Double, TDouble as D };
