// Import
import Complex from './complex';
import { Double, D } from './double';

// Define type
type TDoubleComplex = InstanceType<typeof CDoubleComplex>;

// Double complex class
class CDoubleComplex extends Complex<D> {
  // Constructor
  public constructor(rvalue: number = 0, ivalue: number = 0) {
    super();
    this.rstore = new Double(rvalue);
    this.istore = new Double(ivalue);
  }
}

// Export
export { CDoubleComplex as DoubleComplex, TDoubleComplex as Z };
