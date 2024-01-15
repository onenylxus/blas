// Import
import { Double, D } from './double';
import { Integer } from './integer';
import FortranArray from '../structs/fortranArray';

// Define type
type TDoubleArray = InstanceType<typeof CDoubleArray>;

// Index type handling
type Index = number | Integer;
const reduce = (value: Index): number => {
  if (value instanceof Integer) {
    return value.get();
  }
  return value;
};

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
  public set(index: Index, value: number): void {
    let i: number = reduce(index);
    if (i <= 0 || (this.size !== 0 && i > this.size)) {
      return;
    }
    if (this.size === 0 && i - 1 >= this.store.length) {
      this.store[i - 1] = this.zero;
    }
    this.store[i - 1].set(value);
  }

  // Get value from store
  public get(index: Index): number | undefined {
    let i: number = reduce(index);
    if (i <= 0 || (this.size !== 0 && i > this.size)) {
      return undefined;
    }
    if (this.size === 0 && i - 1 >= this.store.length) {
      return this.zero.get();
    }
    return this.store[i - 1].get();
  }

  // Get all values from store
  public getAll(): number[] {
    return (new Array(this.store.length)).fill(0).map((v, i) => this.store[i].get());
  }
}

// Export
export { CDoubleArray as DoubleArray, TDoubleArray as DA };
