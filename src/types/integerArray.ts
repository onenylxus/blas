// Import
import FortranArray from '../structs/fortranArray';
import { Integer, I } from './integer';

// Define type
type TIntegerArray = InstanceType<typeof CIntegerArray>;

// Integer array class
class CIntegerArray extends FortranArray<I> {
  // Constructor
  public constructor(values: number[] = [], size: number = 0) {
    super();
    this.store = values.map((v) => new Integer(v));
    this.size = Math.max(size, 0);
    this.zero = new Integer(0);
    this.resize();
  }

  // Set value to store
  public set(index: number, value: number): void {
    if (index < 0 || (this.size !== 0 && index >= this.size!)) {
      return;
    }
    if (this.size === 0 && index >= this.store!.length) {
      this.store![index] = this.zero!;
    }
    this.store![index].set(value);
  }

  // Get value from store
  public get(index: number): number | undefined {
    if (index < 0 || (this.size !== 0 && index >= this.size!)) {
      return undefined;
    }
    if (this.size === 0 && index >= this.store!.length) {
      return this.zero!.get();
    }
    return this.store![index].get();
  }

  // Get all values from store
  public getAll(): number[] {
    return (new Array(this.store!.length)).map((v, i) => this.store![i].get());
  }
}

// Export
export { CIntegerArray as IntegerArray, TIntegerArray as IA };
