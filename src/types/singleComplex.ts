// Import
import { Single, S } from './single';
import Complex from '../structs/complex';
import Simple from '../structs/simple';
import _C from '../../utils/complex';
import compare from '../../utils/compare';

// Define type
type TSingleComplex = InstanceType<typeof CSingleComplex>;

// Dynamic type handling
type Dynamic = number | Dual | Simple | Complex<any>;
const reduce = (value: Dynamic): Dual => {
  let result: Dynamic = value;
  if (result instanceof Simple || result instanceof Complex) {
    result = result.get();
  }
  if (typeof result === 'number') {
    result = _C(result, 0);
  }
  return result;
};
const process = (value: Dynamic): Dual => {
  return (new CSingleComplex(reduce(value))).get();
};

// Single complex class
class CSingleComplex extends Complex<S> {
  // Constructor
  public constructor(value: Dual = _C(0, 0)) {
    super();
    this.rstore = new Single(value.r);
    this.istore = new Single(value.i);
  }

  // Addition
  public static add(left: Dynamic, right: Dynamic): CSingleComplex {
    let l: Dual = process(left);
    let r: Dual = process(right);
    return new CSingleComplex(_C(l.r + r.r, l.i + r.i));
  }

  // Subtraction
  public static sub(left: Dynamic, right: Dynamic): CSingleComplex {
    let l: Dual = process(left);
    let r: Dual = process(right);
    return new CSingleComplex(_C(l.r - r.r, l.i - r.i));
  }

  // Multiplication
  public static mul(left: Dynamic, right: Dynamic): CSingleComplex {
    let l: Dual = process(left);
    let r: Dual = process(right);
    return new CSingleComplex(_C(l.r * r.r - l.i * r.i, l.r * r.i + l.i * r.r));
  }

  // Division
  public static div(left: Dynamic, right: Dynamic): CSingleComplex {
    let l: Dual = process(left);
    let r: Dual = process(right);
    return new CSingleComplex(_C((l.r * r.r + l.i * r.i) / (r.r ** 2 + r.i ** 2), (l.i * r.r - l.r * r.i) / (r.r ** 2 + r.i ** 2)));
  }

  // Equal to
  public static eq(left: Dynamic, right: Dynamic): boolean {
    return compare(process(left), process(right), 0);
  }

  // Not equal to
  public static ne(left: Dynamic, right: Dynamic): boolean {
    return !compare(process(left), process(right), 0);
  }
}

// Export
export { CSingleComplex as SingleComplex, TSingleComplex as C };
