// Import
import Complex from '../structs/complex';
import Simple from '../structs/simple';

// Define type
type TInteger = InstanceType<typeof CInteger>;

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
  return (new CInteger(reduce(value))).get();
};

// Integer class
class CInteger extends Simple {
  // Constructor
  public constructor(value: Dynamic = 0) {
    super(value);
  }

  // Set value to store
  public set(value: Dynamic): void {
    this.store = Math.trunc(reduce(value));
  }

  // Local addition
  public add(value: Dynamic): void {
    this.set(CInteger.add(this, value).get());
  }

  // Local subtraction
  public sub(value: Dynamic): void {
    this.set(CInteger.sub(this, value).get());
  }

  // Local multiplication
  public mul(value: Dynamic): void {
    this.set(CInteger.mul(this, value).get());
  }

  // Local division
  public div(value: Dynamic): void {
    this.set(CInteger.div(this, value).get());
  }

  // Local modulo
  public mod(value: Dynamic): void {
    this.set(CInteger.mod(this, value).get());
  }

  // Local exponentation
  public exp(value: Dynamic): void {
    this.set(CInteger.exp(this, value).get());
  }

  // Local equal to
  public eq(value: Dynamic): boolean {
    return CInteger.eq(this, value);
  }

  // Local not equal to
  public ne(value: Dynamic): boolean {
    return CInteger.ne(this, value);
  }

  // Local greater than
  public gt(value: Dynamic): boolean {
    return CInteger.gt(this, value);
  }

  // Local less than
  public lt(value: Dynamic): boolean {
    return CInteger.lt(this, value);
  }

  // Local greater than or equal to
  public ge(value: Dynamic): boolean {
    return CInteger.ge(this, value);
  }

  // Local less than or equal to
  public le(value: Dynamic): boolean {
    return CInteger.le(this, value);
  }

  // Global addition
  public static add(left: Dynamic, right: Dynamic): CInteger {
    return new CInteger(reduce(left) + reduce(right));
  }

  // Global subtraction
  public static sub(left: Dynamic, right: Dynamic): CInteger {
    return new CInteger(reduce(left) - reduce(right));
  }

  // Global multiplication
  public static mul(left: Dynamic, right: Dynamic): CInteger {
    return new CInteger(reduce(left) * reduce(right));
  }

  // Global division
  public static div(left: Dynamic, right: Dynamic): CInteger {
    return new CInteger(reduce(left) / reduce(right));
  }

  // Global modulo
  public static mod(left: Dynamic, right: Dynamic): CInteger {
    return new CInteger(reduce(left) % reduce(right));
  }

  // Global exponentation
  public static exp(left: Dynamic, right: Dynamic): CInteger {
    return new CInteger(reduce(left) ** reduce(right));
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
export { CInteger as Integer, TInteger as I };
