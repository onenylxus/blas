// Import
import FortranArray from './fortranArray';
import { Single, S } from './single';

// Define type
type TSingleArray = InstanceType<typeof CSingleArray>;

// Single array class
class CSingleArray extends FortranArray<S> {
  // Constructor
  public constructor(values: number[] = [], size: number = 0) {
    super();
    this.store = values.map((v) => new Single(v));
    this.size = Math.max(size, 0);
    this.zero = new Single(0);
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
}

// Export
export { CSingleArray as SingleArray, TSingleArray as SA };
