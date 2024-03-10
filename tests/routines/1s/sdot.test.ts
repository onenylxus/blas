// Import
import { isClose, isEqual, isPerf } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';

// Routine snippet
const { sdot } = blas;

// Define test variables
let n: number;
let sx: number[];
let incx: number;
let sy: number[];
let incy: number;

// SDOT routine test
describe('SDOT routine test', () => {
  it('Case 1: n{4},sx[4],incx{1},sy[4],incy{1}', () => {
    // Input
    n = 4;
    sx = [1, 2, 3, 4];
    incx = 1;
    sy = [5, 6, 7, 8];
    incy = 1;

    // Apply routine
    const { result, time } = perf(sdot, { n, sx, incx, sy, incy });

    // Output
    isClose(result._ret, 70);
    isEqual(result.n, 4);
    isEqual(result.sx, [1, 2, 3, 4]);
    isEqual(result.incx, 1);
    isEqual(result.sy, [5, 6, 7, 8]);
    isEqual(result.incy, 1);
    isPerf(time);
  });

  it('Case 2: n{7},sx[7],incx{1},sy[7],incy{1}', () => {
    // Input
    n = 7;
    sx = [1, 1, 2, 3, 5, 8, 13];
    incx = 1;
    sy = [7, 6, 5, 4, 3, 2, 1];
    incy = 1;

    // Apply routine
    const { result, time } = perf(sdot, { n, sx, incx, sy, incy });

    // Output
    isClose(result._ret, 79);
    isEqual(result.n, 7);
    isEqual(result.sx, [1, 1, 2, 3, 5, 8, 13]);
    isEqual(result.incx, 1);
    isEqual(result.sy, [7, 6, 5, 4, 3, 2, 1]);
    isEqual(result.incy, 1);
    isPerf(time);
  });

  it('Case 3: n{10},sx[10],incx{1},sy[10],incy{1}', () => {
    // Input
    n = 10;
    sx = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
    incx = 1;
    sy = [1, -1, 1, -1, 1, 2, -2, 2, -2, 2];
    incy = 1;

    // Apply routine
    const { result, time } = perf(sdot, { n, sx, incx, sy, incy });

    // Output
    isClose(result._ret, 9);
    isEqual(result.n, 10);
    isEqual(result.sx, [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]);
    isEqual(result.incx, 1);
    isEqual(result.sy, [1, -1, 1, -1, 1, 2, -2, 2, -2, 2]);
    isEqual(result.incy, 1);
    isPerf(time);
  });

  it('Case 4: n{0},sx[4],incx{1},sy[4],incy{1}', () => {
    // Input
    n = 0;
    sx = [1, 2, 3, 4];
    incx = 1;
    sy = [5, 6, 7, 8];
    incy = 1;

    // Apply routine
    const { result, time } = perf(sdot, { n, sx, incx, sy, incy });

    // Output
    isClose(result._ret, 0);
    isEqual(result.n, 0);
    isEqual(result.sx, [1, 2, 3, 4]);
    isEqual(result.incx, 1);
    isEqual(result.sy, [5, 6, 7, 8]);
    isEqual(result.incy, 1);
    isPerf(time);
  });

  it('Case 5: n{10},sx[10],incx{2},sy[10],incy{2}', () => {
    // Input
    n = 10;
    sx = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
    incx = 2;
    sy = [1, -1, 1, -1, 1, 2, -2, 2, -2, 2];
    incy = 2;

    // Apply routine
    const { result, time } = perf(sdot, { n, sx, incx, sy, incy });

    // Output
    isClose(result._ret, -3);
    isEqual(result.n, 10);
    isEqual(result.sx, [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]);
    isEqual(result.incx, 2);
    isEqual(result.sy, [1, -1, 1, -1, 1, 2, -2, 2, -2, 2]);
    isEqual(result.incy, 2);
    isPerf(time);
  });

  it('Case 6: n{10},sx[10],incx{-2},sy[10],incy{-2}', () => {
    // Input
    n = 10;
    sx = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
    incx = -2;
    sy = [1, -1, 1, -1, 1, 2, -2, 2, -2, 2];
    incy = -2;

    // Apply routine
    const { result, time } = perf(sdot, { n, sx, incx, sy, incy });

    // Output
    isClose(result._ret, -3);
    isEqual(result.n, 10);
    isEqual(result.sx, [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]);
    isEqual(result.incx, -2);
    isEqual(result.sy, [1, -1, 1, -1, 1, 2, -2, 2, -2, 2]);
    isEqual(result.incy, -2);
    isPerf(time);
  });
});
