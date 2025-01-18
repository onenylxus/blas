// Import
import { toDual } from '../../utils/complex';
import { Single, S } from './single';
import { add, div, mul, sub } from '../mathlib';
import Complex from '../structs/complex';
import Simple from '../structs/simple';

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
    result = toDual(result, 0);
  }
  return result;
};
const process = (value: Dynamic): Dual => {
  return new CSingleComplex(reduce(value)).get();
};

// Single complex class
class CSingleComplex extends Complex<S> {
  // Constructor
  public constructor(value: Dynamic = toDual(0, 0)) {
    super();
    const v: Dual = reduce(value);
    this.rstore = new Single(v.r);
    this.istore = new Single(v.i);
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
    return CSingleComplex.eq(this, value);
  }

  // Local not equal to
  public ne(value: Dynamic): boolean {
    return CSingleComplex.ne(this, value);
  }

  // Global addition
  public static add(left: Dynamic, right: Dynamic): CSingleComplex {
    return new CSingleComplex(add(left, right));
  }

  // Global subtraction
  public static sub(left: Dynamic, right: Dynamic): CSingleComplex {
    return new CSingleComplex(sub(left, right));
  }

  // Global multiplication
  public static mul(left: Dynamic, right: Dynamic): CSingleComplex {
    return new CSingleComplex(mul(left, right));
  }

  // Global division
  public static div(left: Dynamic, right: Dynamic): CSingleComplex {
    return new CSingleComplex(div(left, right));
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
export { CSingleComplex as SingleComplex, TSingleComplex as C };
