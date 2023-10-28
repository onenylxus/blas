// Import
import blas from '../../../src/index';
import { isEqual, isUndefined } from '../../testers';

// Routine snippet
const { dswap } = blas;

// Define test variables
let n: number;
let dx: number[];
let incx: number;
let dy: number[];
let incy: number;
let result: any;

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
    result = dswap({ n, dx, incx, dy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.dx, [5, 6, 7, 8]);
    isEqual(result.incx, 1);
    isEqual(result.dy, [1, 2, 3, 4]);
    isEqual(result.incy, 1);
  });

  it('Case 2: n{2},sx[2],incx{1},sy[2],incy{1}', () => {
    // Input
    n = 2;
    dx = [1, 2];
    incx = 1;
    dy = [3, 4];
    incy = 1;

    // Apply routine
    result = dswap({ n, dx, incx, dy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 2);
    isEqual(result.dx, [3, 4]);
    isEqual(result.incx, 1);
    isEqual(result.dy, [1, 2]);
    isEqual(result.incy, 1);
  });

  it('Case 3: n{4},sx[4],incx{-1},sy[4],incy{1}', () => {
    // Input
    n = 4;
    dx = [1, 2, 3, 4];
    incx = -1;
    dy = [5, 6, 7, 8];
    incy = 1;

    // Apply routine
    result = dswap({ n, dx, incx, dy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.dx, [8, 7, 6, 5]);
    isEqual(result.incx, -1);
    isEqual(result.dy, [4, 3, 2, 1]);
    isEqual(result.incy, 1);
  });

  it('Case 4: n{4},sx[4],incx{1},sy[4],incy{-1}', () => {
    // Input
    n = 4;
    dx = [1, 2, 3, 4];
    incx = 1;
    dy = [5, 6, 7, 8];
    incy = -1;

    // Apply routine
    result = dswap({ n, dx, incx, dy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 4);
    isEqual(result.dx, [8, 7, 6, 5]);
    isEqual(result.incx, 1);
    isEqual(result.dy, [4, 3, 2, 1]);
    isEqual(result.incy, -1);
  });

  it('Case 5: n{0},sx[4],incx{1},sy[4],incy{1}', () => {
    // Input
    n = 0;
    dx = [1, 2, 3, 4];
    incx = 1;
    dy = [5, 6, 7, 8];
    incy = 1;

    // Apply routine
    result = dswap({ n, dx, incx, dy, incy });

    // Output
    isUndefined(result._ret);
    isEqual(result.n, 0);
    isEqual(result.dx, [1, 2, 3, 4]);
    isEqual(result.incx, 1);
    isEqual(result.dy, [5, 6, 7, 8]);
    isEqual(result.incy, 1);
  });
});
