// Import
import Complex from './complex';
import { Single, S } from './single';

// Define type
type TSingleComplex = InstanceType<typeof CSingleComplex>;

// Single complex class
class CSingleComplex extends Complex<S> {
  // Constructor
  public constructor(rvalue: number = 0, ivalue: number = 0) {
    super();
    this.rstore = new Single(rvalue);
    this.istore = new Single(ivalue);
  }
}

// Export
export { CSingleComplex as SingleComplex, TSingleComplex as C };
