// Import
import { Double, D } from './double';
import Complex from '../structs/complex';
import Simple from '../structs/simple';
import _C from '../../utils/complex';

// Define type
type TDoubleComplex = InstanceType<typeof CDoubleComplex>;

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
  return (new CDoubleComplex(reduce(value))).get();
};

// Double complex class
class CDoubleComplex extends Complex<D> {
  // Constructor
  public constructor(value: Dynamic = _C(0, 0)) {
    super();
    let v: Dual = reduce(value);
    this.rstore = new Double(v.r);
    this.istore = new Double(v.i);
  }

  // Set value to store
  public set(value: Dynamic): void {
    let v: Dual = reduce(value);
    this.rstore.set(v.r);
    this.istore.set(v.i);
  }

  // Local addition
  public add(value: Dynamic): void {
    this.set(CDoubleComplex.add(this, value).get());
  }

  // Local subtraction
  public sub(value: Dynamic): void {
    this.set(CDoubleComplex.sub(this, value).get());
  }

  // Local multiplication
  public mul(value: Dynamic): void {
    this.set(CDoubleComplex.mul(this, value).get());
  }

  // Local division
  public div(value: Dynamic): void {
    this.set(CDoubleComplex.div(this, value).get());
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
    let l: Dual = process(left);
    let r: Dual = process(right);
    return new CDoubleComplex(_C(l.r + r.r, l.i + r.i));
  }

  // Global subtraction
  public static sub(left: Dynamic, right: Dynamic): CDoubleComplex {
    let l: Dual = process(left);
    let r: Dual = process(right);
    return new CDoubleComplex(_C(l.r - r.r, l.i - r.i));
  }

  // Global multiplication
  public static mul(left: Dynamic, right: Dynamic): CDoubleComplex {
    let l: Dual = process(left);
    let r: Dual = process(right);
    return new CDoubleComplex(_C(l.r * r.r - l.i * r.i, l.r * r.i + l.i * r.r));
  }

  // Global division
  public static div(left: Dynamic, right: Dynamic): CDoubleComplex {
    let l: Dual = process(left);
    let r: Dual = process(right);
    return new CDoubleComplex(_C((l.r * r.r + l.i * r.i) / (r.r ** 2 + r.i ** 2), (l.i * r.r - l.r * r.i) / (r.r ** 2 + r.i ** 2)));
  }

  // Global equal to
  public static eq(left: Dynamic, right: Dynamic): boolean {
    let l: Dual = process(left);
    let r: Dual = process(right);
    return l.r === r.r && l.i === r.i;
  }

  // Global not equal to
  public static ne(left: Dynamic, right: Dynamic): boolean {
    let l: Dual = process(left);
    let r: Dual = process(right);
    return l.r !== r.r || l.i !== r.i;
  }
}

// Export
export { CDoubleComplex as DoubleComplex, TDoubleComplex as Z };
