// Import
import Complex from './complex';

// Dynamic type handling
type Dynamic = number | Dual | Simple | Complex<any>;

// Simple class
abstract class Simple {
  // Properties
  protected store: number;

  // Constructor
  public constructor(value: Dynamic) {
    this.store = 0;
    this.set(value);
  }

  // Set value to store
  public abstract set(_value: Dynamic): void

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
