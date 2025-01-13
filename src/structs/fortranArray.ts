// Import
import { C } from '../types/singleComplex';
import { D } from '../types/double';
import { I } from '../types/integer';
import { S } from '../types/single';
import { Z } from '../types/doubleComplex';

// Fortran array class
abstract class FortranArray<T extends S | D | I | C | Z> {
  // Properties
  protected size: number;
  protected store: T[];

  // Get zero value
  public abstract get zero(): T;

  // Clear value from store
  public clear(): void {
    this.store!.forEach((v) => v.clear());
  }

  // Resize store array
  protected resize(): void {
    if (this.size === 0) {
      return;
    }
    while (this.store!.length > this.size!) {
      this.store!.pop();
    }
    while (this.store!.length < this.size!) {
      this.store!.push(this.zero);
    }
  }
}

// Export
export default FortranArray;
