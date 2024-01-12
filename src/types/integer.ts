// Import
import Complex from '../structs/complex';
import Simple from '../structs/simple';

// Define type
type TInteger = InstanceType<typeof CInteger>;

// Dynamic type handling
type Dynamic = number | Dual | Simple | Complex<any>;
const reduce = (value: Dynamic): number => {
  let result = value;
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
  public constructor(value: number = 0) {
    super(value);
  }

  // Set value to store
  public set(value: number): void {
    this.store = Math.trunc(value);
  }

  // Addition
  public static add(left: Dynamic, right: Dynamic): CInteger {
    return new CInteger(reduce(left) + reduce(right));
  }

  // Subtraction
  public static sub(left: Dynamic, right: Dynamic): CInteger {
    return new CInteger(reduce(left) - reduce(right));
  }

  // Multiplication
  public static mul(left: Dynamic, right: Dynamic): CInteger {
    return new CInteger(reduce(left) * reduce(right));
  }

  // Division
  public static div(left: Dynamic, right: Dynamic): CInteger {
    return new CInteger(reduce(left) / reduce(right));
  }

  // Exponentation
  public static exp(left: Dynamic, right: Dynamic): CInteger {
    return new CInteger(reduce(left) ** reduce(right));
  }

  // Equal to
  public static eq(left: Dynamic, right: Dynamic): boolean {
    return process(left) === process(right);
  }

  // Not equal to
  public static ne(left: Dynamic, right: Dynamic): boolean {
    return process(left) !== process(right);
  }

  // Greater than
  public static gt(left: Dynamic, right: Dynamic): boolean {
    return process(left) > process(right);
  }

  // Less than
  public static lt(left: Dynamic, right: Dynamic): boolean {
    return process(left) < process(right);
  }

  // Greater than or equal to
  public static ge(left: Dynamic, right: Dynamic): boolean {
    return process(left) >= process(right);
  }

  // Less than or equal to
  public static le(left: Dynamic, right: Dynamic): boolean {
    return process(left) <= process(right);
  }
}

// Export
export { CInteger as Integer, TInteger as I };
