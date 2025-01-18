// Import
import { D } from '../types/double';
import { S } from '../types/single';

// Complex class
export abstract class Complex<T extends S | D> {
  // Properties
  protected rstore: T;
  protected istore: T;

  // Get value from store
  public get(): Dual {
    return {
      r: this.rstore.get(),
      i: this.istore.get(),
    };
  }

  // Clear value in store
  public clear(): void {
    this.rstore.clear();
    this.istore.clear();
  }
}
