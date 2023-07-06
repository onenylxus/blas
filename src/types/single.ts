// Import
import Simple from '../structs/simple';

// Define type
type TSingle = InstanceType<typeof CSingle>;

// Single class
class CSingle extends Simple {
  // Constructor
  public constructor(value: number = 0) {
    super(value);
  }

  // Set value to store
  public set(value: number): void {
    this.store = Math.fround(value);
  }
}

// Export
export { CSingle as Single, TSingle as S };
