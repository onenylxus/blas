// Import
import { Dynamic } from '../structs/dynamic';
import { FortranArray } from '../structs/fortranArray';
import { Index, ireduce } from '../structs';
import { Integer, I } from './integer';

// Fortran type convention
export type IA = IntegerArray;

// Integer array class
export class IntegerArray extends FortranArray<I> {
  // Constructor
  public constructor(values: readonly Dynamic[] = [], size: number = 0) {
    super();
    this.store = values.map((v) => new Integer(v));
    this.size = Math.max(size, 0);
    this.resize();
  }

  // Get zero value
  public get zero(): I {
    return new Integer(0);
  }

  // Set value to store
  public set(index: Index, value: Dynamic): void {
    const i: number = ireduce(index);
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
  public get(index: Index): number | undefined {
    const i: number = ireduce(index);
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
    return this.store.map((v) => v.get());
  }
}
