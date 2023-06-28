// Import
import { D } from '../types/double';
import { S } from '../types/single';

// Complex class
class Complex<T extends S | D> {
  // Properties
  protected rstore: T | undefined;
  protected istore: T | undefined;

  // Set value to store
  public set(value: Dual): void {
    this.rstore!.set(value.r);
    this.istore!.set(value.i);
  }

  // Get value from store
  public get(): Dual {
    return { r: this.rstore!.get(), i: this.istore!.get() };
  }

  // Clear value in store
  public clear(): void {
    this.rstore!.clear();
    this.istore!.clear();
  }
}

// Export
export default Complex;
