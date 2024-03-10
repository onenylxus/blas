// Import
import { isClose, isEqual, isPerf } from '../../testers';
import blas from '../../../src/index';
import perf from '../../../utils/performance';

// Routine snippet
const { sdsdot } = blas;

// Define test variables
let n: number;
let sb: number;
let sx: number[];
let incx: number;
let sy: number[];
let incy: number;

// SDSDOT routine test
describe('SDSDOT routine test', () => {
  it('Case 1: n{4},sb{2},sx[4],incx{1},sy[4],incy{1}', () => {
    // Input
    n = 4;
    sb = 2;
    sx = [1, 2, 3, 4];
    incx = 1;
    sy = [5, 6, 7, 8];
    incy = 1;

    // Apply routine
    const { result, time } = perf(sdsdot, { n, sb, sx, incx, sy, incy });

    // Output
    isClose(result._ret, 72);
    isEqual(result.n, 4);
    isEqual(result.sb, 2);
    isEqual(result.sx, [1, 2, 3, 4]);
    isEqual(result.incx, 1);
    isEqual(result.sy, [5, 6, 7, 8]);
    isEqual(result.incy, 1);
    isPerf(time);
  });

  it('Case 2: n{0},sb{2},sx[4],incx{1},sy[4],incy{1}', () => {
    // Input
    n = 0;
    sb = 2;
    sx = [1, 2, 3, 4];
    incx = 1;
    sy = [5, 6, 7, 8];
    incy = 1;

    // Apply routine
    const { result, time } = perf(sdsdot, { n, sb, sx, incx, sy, incy });

    // Output
    isClose(result._ret, 2);
    isEqual(result.n, 0);
    isEqual(result.sb, 2);
    isEqual(result.sx, [1, 2, 3, 4]);
    isEqual(result.incx, 1);
    isEqual(result.sy, [5, 6, 7, 8]);
    isEqual(result.incy, 1);
    isPerf(time);
  });

  it('Case 3: n{4},sb{3},sx[4],incx{2},sy[4],incy{2}', () => {
    // Input
    n = 4;
    sb = 3;
    sx = [1, 2, 3, 4];
    incx = 2;
    sy = [5, 6, 7, 8];
    incy = 2;

    // Apply routine
    const { result, time } = perf(sdsdot, { n, sb, sx, incx, sy, incy });

    // Output
    isClose(result._ret, 29);
    isEqual(result.n, 4);
    isEqual(result.sb, 3);
    isEqual(result.sx, [1, 2, 3, 4]);
    isEqual(result.incx, 2);
    isEqual(result.sy, [5, 6, 7, 8]);
    isEqual(result.incy, 2);
    isPerf(time);
  });

  it('Case 4: n{2},sb{3},sx[4],incx{-1},sy[4],incy{-1}', () => {
    // Input
    n = 2;
    sb = 3;
    sx = [1, 2, 3, 4];
    incx = -1;
    sy = [5, 6, 7, 8];
    incy = -1;

    // Apply routine
    const { result, time } = perf(sdsdot, { n, sb, sx, incx, sy, incy });

    // Output
    isClose(result._ret, 20);
    isEqual(result.n, 2);
    isEqual(result.sb, 3);
    isEqual(result.sx, [1, 2, 3, 4]);
    isEqual(result.incx, -1);
    isEqual(result.sy, [5, 6, 7, 8]);
    isEqual(result.incy, -1);
    isPerf(time);
  });

  it('Case 5: n{2},sb{3},sx[4],incx{-1},sy[4],incy{1}', () => {
    // Input
    n = 2;
    sb = 3;
    sx = [1, 2, 3, 4];
    incx = -1;
    sy = [5, 6, 7, 8];
    incy = 1;

    // Apply routine
    const { result, time } = perf(sdsdot, { n, sb, sx, incx, sy, incy });

    // Output
    isClose(result._ret, 19);
    isEqual(result.n, 2);
    isEqual(result.sb, 3);
    isEqual(result.sx, [1, 2, 3, 4]);
    isEqual(result.incx, -1);
    isEqual(result.sy, [5, 6, 7, 8]);
    isEqual(result.incy, 1);
    isPerf(time);
  });
});
