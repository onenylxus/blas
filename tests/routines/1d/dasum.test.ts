// Import
import { isEqual, isPerf } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';

// Routine snippet
const { dasum } = blas;

// Define test variables
let n: number;
let dx: number[];
let incx: number;

// DASUM routine test
describe('DASUM routine test', () => {
  it('Case 1: n{6},dx[6],incx{1}', () => {
    // Input
    n = 6;
    dx = [1, 2, 3, 4, 5, 6];
    incx = 1;

    // Apply routine
    const { result, time } = perf(dasum, { n, dx, incx });

    // Output
    isEqual(result._ret, 21);
    isEqual(result.n, 6);
    isEqual(result.dx, [1, 2, 3, 4, 5, 6]);
    isEqual(result.incx, 1);
    isPerf(time);
  });

  it('Case 2: n{5},dx[5],incx{1}', () => {
    // Input
    n = 5;
    dx = [1, 2, 3, 4, 5];
    incx = 1;

    // Apply routine
    const { result, time } = perf(dasum, { n, dx, incx });

    // Output
    isEqual(result._ret, 15);
    isEqual(result.n, 5);
    isEqual(result.dx, [1, 2, 3, 4, 5]);
    isEqual(result.incx, 1);
    isPerf(time);
  });

  it('Case 3: n{6},dx[6],incx{2}', () => {
    // Input
    n = 6;
    dx = [1, 2, 3, 4, 5, 6];
    incx = 2;

    // Apply routine
    const { result, time } = perf(dasum, { n, dx, incx });

    // Output
    isEqual(result._ret, 9);
    isEqual(result.n, 6);
    isEqual(result.dx, [1, 2, 3, 4, 5, 6]);
    isEqual(result.incx, 2);
    isPerf(time);
  });

  it('Case 4: n{0},dx[6],incx{1}', () => {
    // Input
    n = 0;
    dx = [1, 2, 3, 4, 5, 6];
    incx = 1;

    // Apply routine
    const { result, time } = perf(dasum, { n, dx, incx });

    // Output
    isEqual(result._ret, 0);
    isEqual(result.n, 0);
    isEqual(result.dx, [1, 2, 3, 4, 5, 6]);
    isEqual(result.incx, 1);
    isPerf(time);
  });

  it('Case 5: n{6},dx[6],incx{0}', () => {
    // Input
    n = 6;
    dx = [1, 2, 3, 4, 5, 6];
    incx = 0;

    // Apply routine
    const { result, time } = perf(dasum, { n, dx, incx });

    // Output
    isEqual(result._ret, 0);
    isEqual(result.n, 6);
    isEqual(result.dx, [1, 2, 3, 4, 5, 6]);
    isEqual(result.incx, 0);
    isPerf(time);
  });
});
