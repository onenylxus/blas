// Import
import { _C } from '../../utils/complex';
import { DoubleComplex, Z } from './doubleComplex';
import { Integer } from './integer';
import Complex from '../structs/complex';
import FortranArray from '../structs/fortranArray';
import Simple from '../structs/simple';

// Define type
type TDoubleComplexArray = InstanceType<typeof CDoubleComplexArray>;

// Dynamic type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Dynamic = number | Dual | Simple | Complex<any>;

// Index type handling
type Index = number | Integer;
const reduce = (value: Index): number => {
  if (value instanceof Integer) {
    return value.get();
  }
  return value;
};

// Double complex array class
class CDoubleComplexArray extends FortranArray<Z> {
  // Constructor
  public constructor(values: readonly Dynamic[] = [], size: number = 0) {
    super();
    this.store = values.map((v) => new DoubleComplex(v));
    this.size = Math.max(size, 0);
    this.resize();
  }

  // Get zero value
  public get zero(): Z {
    return new DoubleComplex(_C(0, 0));
  }

  // Set value to store
  public set(index: Index, value: Dynamic): void {
    const i: number = reduce(index);
    if (i <= 0 || (this.size !== 0 && i > this.size)) {
      return;
    }
    if (this.size === 0 && i - 1 >= this.store.length) {
      for (let j = this.store.length; j < i; j++) {
        this.store[j] = this.zero;
      }
    }
    this.store[i - 1].set(value);
  }

  // Get value from store
  public get(index: Index): Dual | undefined {
    const i: number = reduce(index);
    if (i <= 0 || (this.size !== 0 && i > this.size)) {
      return undefined;
    }
    if (this.size === 0 && i - 1 >= this.store.length) {
      return this.zero.get();
    }
    return this.store[i - 1].get();
  }

  // Get all values from store
  public getAll(): Dual[] {
    return this.store.map((v) => v.get());
  }
}

// Export
export { CDoubleComplexArray as DoubleComplexArray, TDoubleComplexArray as ZA };
