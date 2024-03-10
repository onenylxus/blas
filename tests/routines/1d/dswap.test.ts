// Import
import { isEqual, isPerf, isUndefined } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';

// Routine snippet
const { dswap } = blas;

// Define test variables
let n: number;
let dx: number[];
let incx: number;
let dy: number[];
let incy: number;

// SSWAP routine test
describe('SSWAP routine test', () => {
  it('Case 1: n{4},sx[4],incx{1},sy[4],incy{1}', () => {
    // Input
    n = 4;
    dx = [1, 2, 3, 4];
    incx = 1;
    dy = [5, 6, 7, 8];
    incy = 1;

    // Apply routine
    const { result, time } = perf(dswap, { n, dx, incx, dy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.dx, [5, 6, 7, 8]);
    isEqual(result.incx, 1);
    isEqual(result.dy, [1, 2, 3, 4]);
    isEqual(result.incy, 1);
    isPerf(time);
  });

  it('Case 2: n{2},sx[2],incx{1},sy[2],incy{1}', () => {
    // Input
    n = 2;
    dx = [1, 2];
    incx = 1;
    dy = [3, 4];
    incy = 1;

    // Apply routine
    const { result, time } = perf(dswap, { n, dx, incx, dy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 2);
    isEqual(result.dx, [3, 4]);
    isEqual(result.incx, 1);
    isEqual(result.dy, [1, 2]);
    isEqual(result.incy, 1);
    isPerf(time);
  });

  it('Case 3: n{4},sx[4],incx{-1},sy[4],incy{1}', () => {
    // Input
    n = 4;
    dx = [1, 2, 3, 4];
    incx = -1;
    dy = [5, 6, 7, 8];
    incy = 1;

    // Apply routine
    const { result, time } = perf(dswap, { n, dx, incx, dy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.dx, [8, 7, 6, 5]);
    isEqual(result.incx, -1);
    isEqual(result.dy, [4, 3, 2, 1]);
    isEqual(result.incy, 1);
    isPerf(time);
  });

  it('Case 4: n{4},sx[4],incx{1},sy[4],incy{-1}', () => {
    // Input
    n = 4;
    dx = [1, 2, 3, 4];
    incx = 1;
    dy = [5, 6, 7, 8];
    incy = -1;

    // Apply routine
    const { result, time } = perf(dswap, { n, dx, incx, dy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.dx, [8, 7, 6, 5]);
    isEqual(result.incx, 1);
    isEqual(result.dy, [4, 3, 2, 1]);
    isEqual(result.incy, -1);
    isPerf(time);
  });

  it('Case 5: n{0},sx[4],incx{1},sy[4],incy{1}', () => {
    // Input
    n = 0;
    dx = [1, 2, 3, 4];
    incx = 1;
    dy = [5, 6, 7, 8];
    incy = 1;

    // Apply routine
    const { result, time } = perf(dswap, { n, dx, incx, dy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 0);
    isEqual(result.dx, [1, 2, 3, 4]);
    isEqual(result.incx, 1);
    isEqual(result.dy, [5, 6, 7, 8]);
    isEqual(result.incy, 1);
    isPerf(time);
  });
});
