// Import
import FortranArray from './fortranArray';
import { DoubleComplex, Z } from './doubleComplex';

// Define type
type TDoubleComplexArray = InstanceType<typeof CDoubleComplexArray>;

// Double complex array class
class CDoubleComplexArray extends FortranArray<Z> {
  // Constructor
  public constructor(values: Dual[] = [], size: number = 0) {
    super();
    this.store = values.map((v) => new DoubleComplex(v));
    this.size = Math.max(size, 0);
    this.zero = new DoubleComplex({ r: 0, i: 0 });
    this.resize();
  }

  // Set value to store
  public set(index: number, value: Dual): void {
    if (index < 0 || (this.size !== 0 && index >= this.size!)) {
      return;
    }
    if (this.size === 0 && index >= this.store!.length) {
      this.store![index] = this.zero!;
    }
    this.store![index].set(value);
  }

  // Get value from store
  public get(index: number): Dual | undefined {
    if (index < 0 || (this.size !== 0 && index >= this.size!)) {
      return undefined;
    }
    if (this.size === 0 && index >= this.store!.length) {
      return this.zero!.get();
    }
    return this.store![index].get();
  }
}

// Export
export { CDoubleComplexArray as DoubleComplexArray, TDoubleComplexArray as ZA };
