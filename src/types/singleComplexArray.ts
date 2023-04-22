// Import
import FortranArray from './fortranArray';
import { SingleComplex, C } from './singleComplex';

// Define type
type TSingleComplexArray = InstanceType<typeof CSingleComplexArray>;

// Single complex array class
class CSingleComplexArray extends FortranArray<C> {
  // Constructor
  public constructor(values: Dual[] = [], size: number = 0) {
    super();
    this.store = values.map((v) => new SingleComplex(v));
    this.size = Math.max(size, 0);
    this.zero = new SingleComplex({ r: 0, i: 0 });
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

  // Get all values from store
  public getAll(): Dual[] {
    return (new Array(this.store!.length)).map((v, i) => this.store![i].get());
  }
}

// Export
export { CSingleComplexArray as SingleComplexArray, TSingleComplexArray as CA };
