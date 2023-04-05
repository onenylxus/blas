// Import
import { D } from './double';
import { S } from './single';

// Define type
type TDual = { r: number, i: number };

// Complex class
class Complex<T extends S | D> {
  // Properties
  protected rstore: T | undefined;
  protected istore: T | undefined;

  // Set value to store
  public set(rvalue: number, ivalue: number): void {
    this.rstore!.set(rvalue);
    this.istore!.set(ivalue);
  }

  // Get value from store
  public get(): TDual {
    return { r: this.rstore!.get(), i: this.istore!.get() };
  }

  // Clear value in store
  public clear(): void {
    this.rstore!.clear();
    this.istore!.clear();
  }
}

// Export
export { Complex, TDual as Dual };
