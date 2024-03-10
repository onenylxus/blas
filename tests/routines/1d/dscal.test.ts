// Import
import { isClose, isEqual, isPerf, isUndefined } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';

// Routine snippet
const { dscal } = blas;

// Define test variables
let n: number;
let da: number;
let dx: number[];
let incx: number;

// DSCAL routine test
describe('DSCAL routine test', () => {
  it('Case 1: n{4},da{1},dx[4],incx{1}', () => {
    // Input
    n = 4;
    da = 1;
    dx = [1, 2, 3, 4];
    incx = 1;

    // Apply routine
    const { result, time } = perf(dscal, { n, da, dx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.da, 1);
    isClose(result.dx, [1, 2, 3, 4]);
    isEqual(result.incx, 1);
    isPerf(time);
  });

  it('Case 2: n{4},da{2},dx[4],incx{1}', () => {
    // Input
    n = 4;
    da = 2;
    dx = [1, 2, 3, 4];
    incx = 1;

    // Apply routine
    const { result, time } = perf(dscal, { n, da, dx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.da, 2);
    isClose(result.dx, [2, 4, 6, 8]);
    isEqual(result.incx, 1);
    isPerf(time);
  });

  it('Case 3: n{5},da{2},dx[5],incx{1}', () => {
    // Input
    n = 5;
    da = 2;
    dx = [1, 2, 3, 4, 5];
    incx = 1;

    // Apply routine
    const { result, time } = perf(dscal, { n, da, dx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 5);
    isEqual(result.da, 2);
    isClose(result.dx, [2, 4, 6, 8, 10]);
    isEqual(result.incx, 1);
    isPerf(time);
  });

  it('Case 4: n{7},da{2},dx[5],incx{1}', () => {
    // Input
    n = 7;
    da = 2;
    dx = [1, 2, 3, 4, 5, 6, 7];
    incx = 1;

    // Apply routine
    const { result, time } = perf(dscal, { n, da, dx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 7);
    isEqual(result.da, 2);
    isClose(result.dx, [2, 4, 6, 8, 10, 12, 14]);
    isEqual(result.incx, 1);
    isPerf(time);
  });

  it('Case 5: n{4},da{-2},dx[7],incx{2}', () => {
    // Input
    n = 4;
    da = -2;
    dx = [1, 2, 3, 4, 5, 6, 7];
    incx = 2;

    // Apply routine
    const { result, time } = perf(dscal, { n, da, dx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.da, -2);
    isClose(result.dx, [-2, 2, -6, 4, -10, 6, -14]);
    isEqual(result.incx, 2);
    isPerf(time);
  });

  it('Case 6: n{4},da{-2},dx[7],incx{-2}', () => {
    // Input
    n = 4;
    da = -2;
    dx = [1, 2, 3, 4, 5, 6, 7];
    incx = -2;

    // Apply routine
    const { result, time } = perf(dscal, { n, da, dx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.da, -2);
    isClose(result.dx, [1, 2, 3, 4, 5, 6, 7]);
    isEqual(result.incx, -2);
    isPerf(time);
  });

  it('Case 7: n{0},da{1},dx[4],incx{1}', () => {
    // Input
    n = 0;
    da = 1;
    dx = [1, 2, 3, 4];
    incx = 1;

    // Apply routine
    const { result, time } = perf(dscal, { n, da, dx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 0);
    isEqual(result.da, 1);
    isClose(result.dx, [1, 2, 3, 4]);
    isEqual(result.incx, 1);
    isPerf(time);
  });
});
