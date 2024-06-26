// Import
import { add, div, mul, pow, sub } from '../mathlib';
import Complex from '../structs/complex';
import Simple from '../structs/simple';

// Define type
type TSingle = InstanceType<typeof CSingle>;

// Dynamic type handling
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Dynamic = number | Dual | Simple | Complex<any>;
const reduce = (value: Dynamic): number => {
  let result: Dynamic = value;
  if (result instanceof Simple || result instanceof Complex) {
    result = result.get();
  }
  if (typeof result == 'object') {
    result = result.r;
  }
  return result;
};
const process = (value: Dynamic): number => {
  return (new CSingle(value)).get();
};

// Single class
class CSingle extends Simple {
  // Constructor
  public constructor(value: Dynamic = 0) {
    super(value);
  }

  // Set value to store
  public set(value: Dynamic): void {
    this.store = Math.fround(reduce(value));
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

  // Local exponentation
  public pow(value: Dynamic): void {
    this.set(pow(this, reduce(value)));
  }

  // Local equal to
  public eq(value: Dynamic): boolean {
    return CSingle.eq(this, value);
  }

  // Local not equal to
  public ne(value: Dynamic): boolean {
    return CSingle.ne(this, value);
  }

  // Local greater than
  public gt(value: Dynamic): boolean {
    return CSingle.gt(this, value);
  }

  // Local less than
  public lt(value: Dynamic): boolean {
    return CSingle.lt(this, value);
  }

  // Local greater than or equal to
  public ge(value: Dynamic): boolean {
    return CSingle.ge(this, value);
  }

  // Local less than or equal to
  public le(value: Dynamic): boolean {
    return CSingle.le(this, value);
  }

  // Global addition
  public static add(left: Dynamic, right: Dynamic): CSingle {
    return new CSingle(add(left, right));
  }

  // Global subtraction
  public static sub(left: Dynamic, right: Dynamic): CSingle {
    return new CSingle(sub(left, right));
  }

  // Global multiplication
  public static mul(left: Dynamic, right: Dynamic): CSingle {
    return new CSingle(mul(left, right));
  }

  // Global division
  public static div(left: Dynamic, right: Dynamic): CSingle {
    return new CSingle(div(left, right));
  }

  // Global exponentation
  public static pow(left: Dynamic, right: Dynamic): CSingle {
    return new CSingle(pow(reduce(left), reduce(right)));
  }

  // Global equal to
  public static eq(left: Dynamic, right: Dynamic): boolean {
    return process(left) === process(right);
  }

  // Global not equal to
  public static ne(left: Dynamic, right: Dynamic): boolean {
    return process(left) !== process(right);
  }

  // Global greater than
  public static gt(left: Dynamic, right: Dynamic): boolean {
    return process(left) > process(right);
  }

  // Global less than
  public static lt(left: Dynamic, right: Dynamic): boolean {
    return process(left) < process(right);
  }

  // Global greater than or equal to
  public static ge(left: Dynamic, right: Dynamic): boolean {
    return process(left) >= process(right);
  }

  // Global less than or equal to
  public static le(left: Dynamic, right: Dynamic): boolean {
    return process(left) <= process(right);
  }
}

// Export
export { CSingle as Single, TSingle as S };
