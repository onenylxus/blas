/* eslint-disable @typescript-eslint/no-explicit-any */

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
  const test: boolean = compare(left, right, 0);
  test ? expect(test).toBeTruthy() : expect(left).toEqual(right);
};

// Strict equal test function
const isStrictEqual = (left: any, right: any): void => {
  expect(left).toStrictEqual(right);
};

// Close test function
const isClose = (left: any, right: any, precision: number = 10e-5): void => {
  const test: boolean = compare(left, right, precision);
  test ? expect(test).toBeTruthy() : expect(left).toEqual(right);
}

// Performance test function
const isPerf = (time: number, limit: number = 100): void => {
  const test: boolean = time <= limit;
  test ? expect(test).toBeTruthy() : expect(time).toBeLessThanOrEqual(limit);
};

// Export
export { isUndefined, isTrue, isFalse, isEqual, isStrictEqual, isClose, isPerf };
