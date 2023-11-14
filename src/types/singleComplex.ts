// Import
import Complex from '../structs/complex';
import { Single, S } from './single';
import _C from '../../utils/complex';

// Define type
type TSingleComplex = InstanceType<typeof CSingleComplex>;

// Single complex class
class CSingleComplex extends Complex<S> {
  // Constructor
  public constructor(value: Dual = _C(0, 0)) {
    super();
    this.rstore = new Single(value.r);
    this.istore = new Single(value.i);
  }
}

// Export
export { CSingleComplex as SingleComplex, TSingleComplex as C };
