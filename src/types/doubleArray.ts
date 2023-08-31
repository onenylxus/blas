// Import
import FortranArray from '../structs/fortranArray';
import { Double, D } from './double';

// Define type
type TDoubleArray = InstanceType<typeof CDoubleArray>;

// Double array class
class CDoubleArray extends FortranArray<D> {
  // Constructor
  public constructor(values: readonly number[] = [], size: number = 0) {
    super();
    this.store = values.map((v) => new Double(v));
    this.size = Math.max(size, 0);
    this.zero = new Double(0);
    this.resize();
  }

  // Set value to store
  public set(index: number, value: number): void {
    if (index <= 0 || (this.size !== 0 && index > this.size!)) {
      return;
    }
    if (this.size === 0 && index - 1 >= this.store!.length) {
      this.store![index - 1] = this.zero!;
    }
    this.store![index - 1].set(value);
  }

  // Get value from store
  public get(index: number): number | undefined {
    if (index <= 0 || (this.size !== 0 && index > this.size!)) {
      return undefined;
    }
    if (this.size === 0 && index - 1 >= this.store!.length) {
      return this.zero!.get();
    }
    return this.store![index - 1].get();
  }

  // Get all values from store
  public getAll(): number[] {
    return (new Array(this.store!.length)).map((v, i) => this.store![i].get());
  }
}

// Export
export { CDoubleArray as DoubleArray, TDoubleArray as DA };
