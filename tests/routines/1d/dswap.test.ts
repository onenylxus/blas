// Import
import blas from '../../../src/index';

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
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(4);
    expect(result.dx).toStrictEqual([5, 6, 7, 8]);
    expect(result.incx).toStrictEqual(1);
    expect(result.dy).toStrictEqual([1, 2, 3, 4]);
    expect(result.incy).toStrictEqual(1);
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
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(2);
    expect(result.dx).toStrictEqual([3, 4]);
    expect(result.incx).toStrictEqual(1);
    expect(result.dy).toStrictEqual([1, 2]);
    expect(result.incy).toStrictEqual(1);
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
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(4);
    expect(result.dx).toStrictEqual([8, 7, 6, 5]);
    expect(result.incx).toStrictEqual(-1);
    expect(result.dy).toStrictEqual([4, 3, 2, 1]);
    expect(result.incy).toStrictEqual(1);
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
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(4);
    expect(result.dx).toStrictEqual([8, 7, 6, 5]);
    expect(result.incx).toStrictEqual(1);
    expect(result.dy).toStrictEqual([4, 3, 2, 1]);
    expect(result.incy).toStrictEqual(-1);
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
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(0);
    expect(result.dx).toStrictEqual([1, 2, 3, 4]);
    expect(result.incx).toStrictEqual(1);
    expect(result.dy).toStrictEqual([5, 6, 7, 8]);
    expect(result.incy).toStrictEqual(1);
  });
});
