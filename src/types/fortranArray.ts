// Import
import { C } from './singleComplex';
import { D } from './double';
import { I } from './integer';
import { S } from './single';
import { Z } from './doubleComplex';

// Fortran array class
class FortranArray<T extends S | D | I | C | Z> {
  // Properties
  protected size: number | undefined;
  protected store: T[] | undefined;
  protected zero: T | undefined;

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
      this.store!.push(this.zero!);
    }
  }
}

// Export
export default FortranArray;
