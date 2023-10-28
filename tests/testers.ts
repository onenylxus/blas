// Import
import compare from '../utils/compare';

// Undefined test function
const isUndefined = (value: any): void => {
  expect(value).toBeUndefined();
};

// True test function
const isTrue = (value: any): void => {
  expect(value).toBeTruthy();
};

// False test function
const isFalse = (value: any): void => {
  expect(value).toBeFalsy();
};

// Equal test function
const isEqual = (left: any, right: any): void => {
  let test: boolean = compare(left, right, 0);
  if (test) {
    expect(test).toBeTruthy();
  } else {
    expect(left).toEqual(right);
  }
};

// Strict equal test function
const isStrictEqual = (left: any, right: any): void => {
  expect(left).toStrictEqual(right);
};

// Close test function
const isClose = (left: any, right: any, precision: number = 10e-5): void => {
  let test: boolean = compare(left, right, precision);
  if (test) {
    expect(test).toBeTruthy();
  } else {
    expect(left).toBeCloseTo(right, -Math.ceil(Math.log10(precision)));
  }
}

// Export
export { isUndefined, isTrue, isFalse, isEqual, isStrictEqual, isClose };
