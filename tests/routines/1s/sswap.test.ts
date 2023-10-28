// Import
import blas from '../../../src/index';
import { isEqual, isUndefined } from '../../testers';

// Routine snippet
const { sswap } = blas;

// Define test variables
let n: number;
let sx: number[];
let incx: number;
let sy: number[];
let incy: number;
let result: any;

// SSWAP routine test
describe('SSWAP routine test', () => {
  it('Case 1: n{4},sx[4],incx{1},sy[4],incy{1}', () => {
    // Input
    n = 4;
    sx = [1, 2, 3, 4];
    incx = 1;
    sy = [5, 6, 7, 8];
    incy = 1;

    // Apply routine
    result = sswap({ n, sx, incx, sy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.sx, [5, 6, 7, 8]);
    isEqual(result.incx, 1);
    isEqual(result.sy, [1, 2, 3, 4]);
    isEqual(result.incy, 1);
  });

  it('Case 2: n{2},sx[2],incx{1},sy[2],incy{1}', () => {
    // Input
    n = 2;
    sx = [1, 2];
    incx = 1;
    sy = [3, 4];
    incy = 1;

    // Apply routine
    result = sswap({ n, sx, incx, sy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 2);
    isEqual(result.sx, [3, 4]);
    isEqual(result.incx, 1);
    isEqual(result.sy, [1, 2]);
    isEqual(result.incy, 1);
  });

  it('Case 3: n{4},sx[4],incx{-1},sy[4],incy{1}', () => {
    // Input
    n = 4;
    sx = [1, 2, 3, 4];
    incx = -1;
    sy = [5, 6, 7, 8];
    incy = 1;

    // Apply routine
    result = sswap({ n, sx, incx, sy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.sx, [8, 7, 6, 5]);
    isEqual(result.incx, -1);
    isEqual(result.sy, [4, 3, 2, 1]);
    isEqual(result.incy, 1);
  });

  it('Case 4: n{4},sx[4],incx{1},sy[4],incy{-1}', () => {
    // Input
    n = 4;
    sx = [1, 2, 3, 4];
    incx = 1;
    sy = [5, 6, 7, 8];
    incy = -1;

    // Apply routine
    result = sswap({ n, sx, incx, sy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.sx, [8, 7, 6, 5]);
    isEqual(result.incx, 1);
    isEqual(result.sy, [4, 3, 2, 1]);
    isEqual(result.incy, -1);
  });

  it('Case 5: n{0},sx[4],incx{1},sy[4],incy{1}', () => {
    // Input
    n = 0;
    sx = [1, 2, 3, 4];
    incx = 1;
    sy = [5, 6, 7, 8];
    incy = 1;

    // Apply routine
    result = sswap({ n, sx, incx, sy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 0);
    isEqual(result.sx, [1, 2, 3, 4]);
    isEqual(result.incx, 1);
    isEqual(result.sy, [5, 6, 7, 8]);
    isEqual(result.incy, 1);
  });
});
