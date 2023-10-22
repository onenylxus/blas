// Import
import blas from '../../../src/index';
import compare from '../../../utils/compare';

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
    expect(compare(result._ret, undefined)).toBeTruthy();
    expect(compare(result.n, 4)).toBeTruthy();
    expect(compare(result.sx, [5, 6, 7, 8])).toBeTruthy();
    expect(compare(result.incx, 1)).toBeTruthy();
    expect(compare(result.sy, [1, 2, 3, 4])).toBeTruthy();
    expect(compare(result.incy, 1)).toBeTruthy();
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
    expect(compare(result._ret, undefined)).toBeTruthy();
    expect(compare(result.n, 2)).toBeTruthy();
    expect(compare(result.sx, [3, 4])).toBeTruthy();
    expect(compare(result.incx, 1)).toBeTruthy();
    expect(compare(result.sy, [1, 2])).toBeTruthy();
    expect(compare(result.incy, 1)).toBeTruthy();
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
    expect(compare(result._ret, undefined)).toBeTruthy();
    expect(compare(result.n, 4)).toBeTruthy();
    expect(compare(result.sx, [8, 7, 6, 5])).toBeTruthy();
    expect(compare(result.incx, -1)).toBeTruthy();
    expect(compare(result.sy, [4, 3, 2, 1])).toBeTruthy();
    expect(compare(result.incy, 1)).toBeTruthy();
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
    expect(compare(result._ret, undefined)).toBeTruthy();
    expect(compare(result.n, 4)).toBeTruthy();
    expect(compare(result.sx, [8, 7, 6, 5])).toBeTruthy();
    expect(compare(result.incx, 1)).toBeTruthy();
    expect(compare(result.sy, [4, 3, 2, 1])).toBeTruthy();
    expect(compare(result.incy, -1)).toBeTruthy();
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
    expect(compare(result._ret, undefined)).toBeTruthy();
    expect(compare(result.n, 0)).toBeTruthy();
    expect(compare(result.sx, [1, 2, 3, 4])).toBeTruthy();
    expect(compare(result.incx, 1)).toBeTruthy();
    expect(compare(result.sy, [5, 6, 7, 8])).toBeTruthy();
    expect(compare(result.incy, 1)).toBeTruthy();
  });
});
