// Import
import Complex from '../structs/complex';
import { Double, D } from './double';

// Define type
type TDoubleComplex = InstanceType<typeof CDoubleComplex>;

// Double complex class
class CDoubleComplex extends Complex<D> {
  // Constructor
  public constructor(value: Dual = { r: 0, i: 0 }) {
    super();
    this.rstore = new Double(value.r);
    this.istore = new Double(value.i);
  }
}

// Export
export { CDoubleComplex as DoubleComplex, TDoubleComplex as Z };
