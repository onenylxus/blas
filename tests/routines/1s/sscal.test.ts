// Import
import { isClose, isEqual, isPerf, isUndefined } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';

// Routine snippet
const { sscal } = blas;

// Define test variables
let n: number;
let sa: number;
let sx: number[];
let incx: number;

// SSCAL routine test
describe('SSCAL routine test', () => {
  it('Case 1: n{4},sa{1},sx[4],incx{1}', () => {
    // Input
    n = 4;
    sa = 1;
    sx = [1, 2, 3, 4];
    incx = 1;

    // Apply routine
    const { result, time } = perf(sscal, { n, sa, sx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.sa, 1);
    isClose(result.sx, [1, 2, 3, 4]);
    isEqual(result.incx, 1);
    isPerf(time);
  });

  it('Case 2: n{4},sa{2},sx[4],incx{1}', () => {
    // Input
    n = 4;
    sa = 2;
    sx = [1, 2, 3, 4];
    incx = 1;

    // Apply routine
    const { result, time } = perf(sscal, { n, sa, sx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.sa, 2);
    isClose(result.sx, [2, 4, 6, 8]);
    isEqual(result.incx, 1);
    isPerf(time);
  });

  it('Case 3: n{5},sa{2},sx[5],incx{1}', () => {
    // Input
    n = 5;
    sa = 2;
    sx = [1, 2, 3, 4, 5];
    incx = 1;

    // Apply routine
    const { result, time } = perf(sscal, { n, sa, sx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 5);
    isEqual(result.sa, 2);
    isClose(result.sx, [2, 4, 6, 8, 10]);
    isEqual(result.incx, 1);
    isPerf(time);
  });

  it('Case 4: n{7},sa{2},sx[5],incx{1}', () => {
    // Input
    n = 7;
    sa = 2;
    sx = [1, 2, 3, 4, 5, 6, 7];
    incx = 1;

    // Apply routine
    const { result, time } = perf(sscal, { n, sa, sx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 7);
    isEqual(result.sa, 2);
    isClose(result.sx, [2, 4, 6, 8, 10, 12, 14]);
    isEqual(result.incx, 1);
    isPerf(time);
  });

  it('Case 5: n{4},sa{-2},sx[7],incx{2}', () => {
    // Input
    n = 4;
    sa = -2;
    sx = [1, 2, 3, 4, 5, 6, 7];
    incx = 2;

    // Apply routine
    const { result, time } = perf(sscal, { n, sa, sx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.sa, -2);
    isClose(result.sx, [-2, 2, -6, 4, -10, 6, -14]);
    isEqual(result.incx, 2);
    isPerf(time);
  });

  it('Case 6: n{4},sa{-2},sx[7],incx{-2}', () => {
    // Input
    n = 4;
    sa = -2;
    sx = [1, 2, 3, 4, 5, 6, 7];
    incx = -2;

    // Apply routine
    const { result, time } = perf(sscal, { n, sa, sx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.sa, -2);
    isClose(result.sx, [1, 2, 3, 4, 5, 6, 7]);
    isEqual(result.incx, -2);
    isPerf(time);
  });

  it('Case 7: n{0},sa{1},sx[4],incx{1}', () => {
    // Input
    n = 0;
    sa = 1;
    sx = [1, 2, 3, 4];
    incx = 1;

    // Apply routine
    const { result, time } = perf(sscal, { n, sa, sx, incx });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 0);
    isEqual(result.sa, 1);
    isClose(result.sx, [1, 2, 3, 4]);
    isEqual(result.incx, 1);
    isPerf(time);
  });
});
