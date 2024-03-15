// Import
import { isClose, isEqual, isPerf } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';

// Routine snippet
const { dnrm2 } = blas;

// Define test variables
let n: number;
let x: number[];
let incx: number;

// DNRM2 routine test
describe('DNRM2 routine test', () => {
  it('Case 1: n{4},x[4],incx{1}', () => {
    // Input
    n = 4;
    x = [3, 2, 3, 0];
    incx = 1;

    // Apply routine
    const { result, time } = perf(dnrm2, { n, x, incx });

    // Output
    isClose(result._ret, 4.69041575982343);
    isEqual(result.n, 4);
    isEqual(result.x, [3, 2, 3, 0]);
    isEqual(result.incx, 1);
    isPerf(time);
  });

  it('Case 2: n{4},x[4],incx{-1}', () => {
    // Input
    n = 4;
    x = [3, 2, 3, 0];
    incx = -1;

    // Apply routine
    const { result, time } = perf(dnrm2, { n, x, incx });

    // Output
    isClose(result._ret, 4.69041575982343);
    isEqual(result.n, 4);
    isEqual(result.x, [3, 2, 3, 0]);
    isEqual(result.incx, -1);
    isPerf(time);
  });

  it('Case 3: n{1},x[4],incx{1}', () => {
    // Input
    n = 1;
    x = [3, 2, 3, 0];
    incx = 1;

    // Apply routine
    const { result, time } = perf(dnrm2, { n, x, incx });

    // Output
    isClose(result._ret, 3);
    isEqual(result.n, 1);
    isEqual(result.x, [3, 2, 3, 0]);
    isEqual(result.incx, 1);
    isPerf(time);
  });
});