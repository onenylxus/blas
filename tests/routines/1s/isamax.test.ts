// Import
import { isEqual, isPerf } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';

// Routine snippet
const { isamax } = blas;

// Define test variables
let n: number;
let sx: number[];
let incx: number;

// ISAMAX routine test
describe('ISAMAX routine test', () => {
  it('Case 1: n{6},sx[6],incx{1}', () => {
    // Input
    n = 6;
    sx = [1, 2, 3, 4, 5, 6];
    incx = 1;

    // Apply routine
    const { result, time } = perf(isamax, { n, sx, incx });

    // Output
    isEqual(result._ret, 6);
    isEqual(result.n, 6);
    isEqual(result.sx, [1, 2, 3, 4, 5, 6]);
    isEqual(result.incx, 1);
    isPerf(time);
  });

  it('Case 2: n{3},sx[6],incx{2}', () => {
    // Input
    n = 3;
    sx = [1, 2, 3, 4, 5, 6];
    incx = 2;

    // Apply routine
    const { result, time } = perf(isamax, { n, sx, incx });

    // Output
    isEqual(result._ret, 3);
    isEqual(result.n, 3);
    isEqual(result.sx, [1, 2, 3, 4, 5, 6]);
    isEqual(result.incx, 2);
    isPerf(time);
  });

  it('Case 3: n{6},sx[6],incx{-1}', () => {
    // Input
    n = 6;
    sx = [1, 2, 3, 4, 5, 6];
    incx = -1;

    // Apply routine
    const { result, time } = perf(isamax, { n, sx, incx });

    // Output
    isEqual(result._ret, 0);
    isEqual(result.n, 6);
    isEqual(result.sx, [1, 2, 3, 4, 5, 6]);
    isEqual(result.incx, -1);
    isPerf(time);
  });

  it('Case 4: n{0},sx[6],incx{1}', () => {
    // Input
    n = 0;
    sx = [1, 2, 3, 4, 5, 6];
    incx = 1;

    // Apply routine
    const { result, time } = perf(isamax, { n, sx, incx });

    // Output
    isEqual(result._ret, 0);
    isEqual(result.n, 0);
    isEqual(result.sx, [1, 2, 3, 4, 5, 6]);
    isEqual(result.incx, 1);
    isPerf(time);
  });

  it('Case 5: n{1},sx[6],incx{1}', () => {
    // Input
    n = 1;
    sx = [1, 2, 3, 4, 5, 6];
    incx = 1;

    // Apply routine
    const { result, time } = perf(isamax, { n, sx, incx });

    // Output
    isEqual(result._ret, 1);
    isEqual(result.n, 1);
    isEqual(result.sx, [1, 2, 3, 4, 5, 6]);
    isEqual(result.incx, 1);
    isPerf(time);
  });
});
