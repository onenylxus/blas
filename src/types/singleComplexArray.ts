// Import
import { toDual } from '../../utils/complex';
import { Integer } from './integer';
import { SingleComplex, C } from './singleComplex';
import Complex from '../structs/complex';
import FortranArray from '../structs/fortranArray';
import Simple from '../structs/simple';

// Define type
type TSingleComplexArray = InstanceType<typeof CSingleComplexArray>;

// Dynamic type
type Dynamic = number | Dual | Simple | Complex<any>;

// Index type handling
type Index = number | Integer;
const reduce = (value: Index): number => {
  if (value instanceof Integer) {
    return value.get();
  }
  return value;
};

// Single complex array class
class CSingleComplexArray extends FortranArray<C> {
  // Constructor
  public constructor(values: readonly Dynamic[] = [], size: number = 0) {
    super();
    this.store = values.map((v) => new SingleComplex(v));
    this.size = Math.max(size, 0);
    this.resize();
  }

  // Get zero value
  public get zero(): C {
    return new SingleComplex(toDual(0, 0));
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
export { CSingleComplexArray as SingleComplexArray, TSingleComplexArray as CA };
