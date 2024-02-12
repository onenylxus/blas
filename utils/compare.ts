/* eslint-disable @typescript-eslint/no-explicit-any */

// Compare function
const compare = (left: any, right: any, precision: number): boolean => {
  // Array iteration
  if (left instanceof Array && right instanceof Array) {
    return left.length === right.length && left.every((v, i) => compare(v, right[i], precision));
  }

  // Dual check
  if (typeof left === 'object' && typeof right === 'object') {
    if (typeof left.r === 'number' && typeof left.i === 'number' && typeof right.r === 'number' && typeof right.i === 'number') {
      return compare(left.r, right.r, precision) && compare(left.i, right.i, precision);
    }
  }

  // Number check with precision
  if (typeof left === 'number' && typeof right === 'number') {
    return Math.abs((left - right) / ((right !== 0) ? right : 1)) <= precision;
  }

  // Fallback to strict equal check
  return left === right;
};

// Export
export default compare;
