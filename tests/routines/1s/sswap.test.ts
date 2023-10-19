// Import
import blas from '../../../src/index';

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
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(4);
    expect(result.sx).toStrictEqual([5, 6, 7, 8]);
    expect(result.incx).toStrictEqual(1);
    expect(result.sy).toStrictEqual([1, 2, 3, 4]);
    expect(result.incy).toStrictEqual(1);
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
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(2);
    expect(result.sx).toStrictEqual([3, 4]);
    expect(result.incx).toStrictEqual(1);
    expect(result.sy).toStrictEqual([1, 2]);
    expect(result.incy).toStrictEqual(1);
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
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(4);
    expect(result.sx).toStrictEqual([8, 7, 6, 5]);
    expect(result.incx).toStrictEqual(-1);
    expect(result.sy).toStrictEqual([4, 3, 2, 1]);
    expect(result.incy).toStrictEqual(1);
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
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(4);
    expect(result.sx).toStrictEqual([8, 7, 6, 5]);
    expect(result.incx).toStrictEqual(1);
    expect(result.sy).toStrictEqual([4, 3, 2, 1]);
    expect(result.incy).toStrictEqual(-1);
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
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(0);
    expect(result.sx).toStrictEqual([1, 2, 3, 4]);
    expect(result.incx).toStrictEqual(1);
    expect(result.sy).toStrictEqual([5, 6, 7, 8]);
    expect(result.incy).toStrictEqual(1);
  });
});
