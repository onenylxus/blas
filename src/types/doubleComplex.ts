// Import
import { Double, D } from './double';
import { add, div, mul, sub } from '../mathlib';
import Complex from '../structs/complex';
import Simple from '../structs/simple';
import _C from '../../utils/complex';

// Define type
type TDoubleComplex = InstanceType<typeof CDoubleComplex>;

// Dynamic type handling
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  return (new CDoubleComplex(reduce(value))).get();
};

// Double complex class
class CDoubleComplex extends Complex<D> {
  // Constructor
  public constructor(value: Dynamic = _C(0, 0)) {
    super();
    const v: Dual = reduce(value);
    this.rstore = new Double(v.r);
    this.istore = new Double(v.i);
  }

  // Set value to store
  public set(value: Dynamic): void {
    const v: Dual = reduce(value);
    this.rstore.set(v.r);
    this.istore.set(v.i);
  }

  // Local addition
  public add(value: Dynamic): void {
    this.set(add(this, value));
  }

  // Local subtraction
  public sub(value: Dynamic): void {
    this.set(sub(this, value));
  }

  // Local multiplication
  public mul(value: Dynamic): void {
    this.set(mul(this, value));
  }

  // Local division
  public div(value: Dynamic): void {
    this.set(div(this, value));
  }

  // Local equal to
  public eq(value: Dynamic): boolean {
    return CDoubleComplex.eq(this, value);
  }

  // Local not equal to
  public ne(value: Dynamic): boolean {
    return CDoubleComplex.ne(this, value);
  }

  // Global addition
  public static add(left: Dynamic, right: Dynamic): CDoubleComplex {
    return new CDoubleComplex(add(left, right));
  }

  // Global subtraction
  public static sub(left: Dynamic, right: Dynamic): CDoubleComplex {
    return new CDoubleComplex(sub(left, right));
  }

  // Global multiplication
  public static mul(left: Dynamic, right: Dynamic): CDoubleComplex {
    return new CDoubleComplex(mul(left, right));
  }

  // Global division
  public static div(left: Dynamic, right: Dynamic): CDoubleComplex {
    return new CDoubleComplex(div(left, right));
  }

  // Global equal to
  public static eq(left: Dynamic, right: Dynamic): boolean {
    const l: Dual = process(left);
    const r: Dual = process(right);
    return l.r === r.r && l.i === r.i;
  }

  // Global not equal to
  public static ne(left: Dynamic, right: Dynamic): boolean {
    const l: Dual = process(left);
    const r: Dual = process(right);
    return l.r !== r.r || l.i !== r.i;
  }
}

// Export
export { CDoubleComplex as DoubleComplex, TDoubleComplex as Z };
