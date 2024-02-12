// Import
import Complex from './complex';

// Dynamic type handling
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Dynamic = number | Dual | Simple | Complex<any>;

// Simple class
class Simple {
  // Properties
  protected store: number;

  // Constructor
  public constructor(value: Dynamic) {
    this.store = 0;
    this.set(value);
  }

  // Set value to store
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public set(value: Dynamic): void {

  }

  // Get value from store
  public get(): number {
    return this.store;
  }

  // Clear value in store
  public clear(): void {
    this.set(0);
  }
}

// Export
export default Simple;
