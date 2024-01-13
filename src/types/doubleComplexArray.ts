// Import
import { DoubleComplex, Z } from './doubleComplex';
import FortranArray from '../structs/fortranArray';
import _C from '../../utils/complex';

// Define type
type TDoubleComplexArray = InstanceType<typeof CDoubleComplexArray>;

// Double complex array class
class CDoubleComplexArray extends FortranArray<Z> {
  // Constructor
  public constructor(values: readonly Dual[] = [], size: number = 0) {
    super();
    this.store = values.map((v) => new DoubleComplex(v));
    this.size = Math.max(size, 0);
    this.zero = new DoubleComplex(_C(0, 0));
    this.resize();
  }

  // Set value to store
  public set(index: number, value: Dual): void {
    if (index <= 0 || (this.size !== 0 && index > this.size!)) {
      return;
    }
    if (this.size === 0 && index - 1 >= this.store!.length) {
      this.store![index - 1] = this.zero!;
    }
    this.store![index - 1].set(value);
  }

  // Get value from store
  public get(index: number): Dual | undefined {
    if (index <= 0 || (this.size !== 0 && index > this.size!)) {
      return undefined;
    }
    if (this.size === 0 && index - 1 >= this.store!.length) {
      return this.zero!.get();
    }
    return this.store![index - 1].get();
  }

  // Get all values from store
  public getAll(): Dual[] {
    return (new Array(this.store!.length)).fill(0).map((v, i) => this.store![i].get());
  }
}

// Export
export { CDoubleComplexArray as DoubleComplexArray, TDoubleComplexArray as ZA };
