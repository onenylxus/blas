// Import
import blas from '../../../src/index';

// Routine snippet
const { dcopy } = blas;

// Define test variables
let n: number;
let dx: number[];
let incx: number;
let dy: number[];
let incy: number;
let result: any;

// DCOPY routine test
describe('DCOPY routine test', () => {
  it('Case 1: n{4},dx[4],incx{1},dy[4],incy{1}', () => {
    // Input
    n = 4;
    dx = [1, 2, 3, 4];
    incx = 1;
    dy = [0, 0, 0, 0];
    incy = 1;

    // Apply routine
    result = dcopy({ n, dx, incx, dy, incy });

    // Output
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(4);
    expect(result.dx).toStrictEqual([1, 2, 3, 4]);
    expect(result.incx).toStrictEqual(1);
    expect(result.dy).toStrictEqual([1, 2, 3, 4]);
    expect(result.incy).toStrictEqual(1);
  });

  it('Case 2: n{10},dx[10],incx{1},dy[10],incy{1}', () => {
    // Input
    n = 10;
    dx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    incx = 1;
    dy = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    incy = 1;

    // Apply routine
    result = dcopy({ n, dx, incx, dy, incy });

    // Output
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(10);
    expect(result.dx).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(result.incx).toStrictEqual(1);
    expect(result.dy).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(result.incy).toStrictEqual(1);
  });

  it('Case 3: n{7},dx[7],incx{1},dy[7],incy{1}', () => {
    // Input
    n = 7;
    dx = [1, 2, 3, 4, 5, 6, 7];
    incx = 1;
    dy = [0, 0, 0, 0, 0, 0, 0];
    incy = 1;

    // Apply routine
    result = dcopy({ n, dx, incx, dy, incy });

    // Output
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(7);
    expect(result.dx).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(result.incx).toStrictEqual(1);
    expect(result.dy).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(result.incy).toStrictEqual(1);
  });

  it('Case 4: n{5},dx[9],incx{2},dy[9],incy{2}', () => {
    // Input
    n = 5;
    dx = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    incx = 2;
    dy = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    incy = 2;

    // Apply routine
    result = dcopy({ n, dx, incx, dy, incy });

    // Output
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(5);
    expect(result.dx).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(result.incx).toStrictEqual(2);
    expect(result.dy).toStrictEqual([1, 0, 3, 0, 5, 0, 7, 0, 9]);
    expect(result.incy).toStrictEqual(2);
  });

  it('Case 5: n{5},dx[9],incx{2},dy[9],incy{-1}', () => {
    // Input
    n = 5;
    dx = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    incx = 2;
    dy = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    incy = -1;

    // Apply routine
    result = dcopy({ n, dx, incx, dy, incy });

    // Output
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(5);
    expect(result.dx).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(result.incx).toStrictEqual(2);
    expect(result.dy).toStrictEqual([9, 7, 5, 3, 1, 0, 0, 0, 0]);
    expect(result.incy).toStrictEqual(-1);
  });

  it('Case 6: n{5},dx[9],incx{-2},dy[9],incy{1}', () => {
    // Input
    n = 5;
    dx = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    incx = -2;
    dy = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    incy = 1;

    // Apply routine
    result = dcopy({ n, dx, incx, dy, incy });

    // Output
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(5);
    expect(result.dx).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(result.incx).toStrictEqual(-2);
    expect(result.dy).toStrictEqual([9, 7, 5, 3, 1, 0, 0, 0, 0]);
    expect(result.incy).toStrictEqual(1);
  });

  it('Case 7: n{0},dx[4],incx{1},dy[4],incy{1}', () => {
    // Input
    n = 0;
    dx = [1, 2, 3, 4];
    incx = 1;
    dy = [0, 0, 0, 0];
    incy = 1;

    // Apply routine
    result = dcopy({ n, dx, incx, dy, incy });

    // Output
    expect(result._ret).toBeUndefined();
    expect(result.n).toStrictEqual(0);
    expect(result.dx).toStrictEqual([1, 2, 3, 4]);
    expect(result.incx).toStrictEqual(1);
    expect(result.dy).toStrictEqual([0, 0, 0, 0]);
    expect(result.incy).toStrictEqual(1);
  });
});
