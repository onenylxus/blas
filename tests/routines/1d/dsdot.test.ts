// Import
import { isClose, isEqual, isPerf } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';

// Routine snippet
const { dsdot } = blas;

// Define test variables
let n: number;
let sx: number[];
let incx: number;
let sy: number[];
let incy: number;

// DSDOT routine test
describe('DSDOT routine test', () => {
  it('Case 1: n{4},sx[4],incx{1},sy[4],incy{1}', () => {
    // Input
    n = 4;
    sx = [1, 2, 3, 4];
    incx = 1;
    sy = [5, 6, 7, 8];
    incy = 1;

    // Apply routine
    const { result, time } = perf(dsdot, { n, sx, incx, sy, incy });

    // Output
    isClose(result._ret, 70);
    isEqual(result.n, 4);
    isClose(result.sx, [1, 2, 3, 4]);
    isEqual(result.incx, 1);
    isClose(result.sy, [5, 6, 7, 8]);
    isEqual(result.incy, 1);
    isPerf(time);
  });

  it('Case 2: n{0},sx[4],incx{1},sy[4],incy{1}', () => {
    // Input
    n = 0;
    sx = [1, 2, 3, 4];
    incx = 1;
    sy = [5, 6, 7, 8];
    incy = 1;

    // Apply routine
    const { result, time } = perf(dsdot, { n, sx, incx, sy, incy });

    // Output
    isClose(result._ret, 0);
    isEqual(result.n, 0);
    isClose(result.sx, [1, 2, 3, 4]);
    isEqual(result.incx, 1);
    isClose(result.sy, [5, 6, 7, 8]);
    isEqual(result.incy, 1);
    isPerf(time);
  });

  it('Case 3: n{4},sx[4],incx{2},sy[4],incy{2}', () => {
    // Input
    n = 4;
    sx = [1, 2, 3, 4];
    incx = 2;
    sy = [5, 6, 7, 8];
    incy = 2;

    // Apply routine
    const { result, time } = perf(dsdot, { n, sx, incx, sy, incy });

    // Output
    isClose(result._ret, 26);
    isEqual(result.n, 4);
    isClose(result.sx, [1, 2, 3, 4]);
    isEqual(result.incx, 2);
    isClose(result.sy, [5, 6, 7, 8]);
    isEqual(result.incy, 2);
    isPerf(time);
  });

  it('Case 4: n{2},sx[4],incx{-1},sy[4],incy{-1}', () => {
    // Input
    n = 2;
    sx = [1, 2, 3, 4];
    incx = -1;
    sy = [5, 6, 7, 8];
    incy = -1;

    // Apply routine
    const { result, time } = perf(dsdot, { n, sx, incx, sy, incy });

    // Output
    isClose(result._ret, 17);
    isEqual(result.n, 2);
    isClose(result.sx, [1, 2, 3, 4]);
    isEqual(result.incx, -1);
    isClose(result.sy, [5, 6, 7, 8]);
    isEqual(result.incy, -1);
    isPerf(time);
  });

  it('Case 5: n{2},sx[4],incx{-1},sy[4],incy{1}', () => {
    // Input
    n = 2;
    sx = [1, 2, 3, 4];
    incx = -1;
    sy = [5, 6, 7, 8];
    incy = 1;

    // Apply routine
    const { result, time } = perf(dsdot, { n, sx, incx, sy, incy });

    // Output
    isClose(result._ret, 16);
    isEqual(result.n, 2);
    isClose(result.sx, [1, 2, 3, 4]);
    isEqual(result.incx, -1);
    isClose(result.sy, [5, 6, 7, 8]);
    isEqual(result.incy, 1);
    isPerf(time);
  });
});
